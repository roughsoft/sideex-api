/*
 * Copyright 2017 SideeX committers
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
import cloneDeep from "lodash/cloneDeep";

export class FileController {
    constructor(isDOMBased) {
        this.selectedSuiteIdTexts = [];
        this.selectedCaseIdTexts = [];
        this.selectedRecordIdTexts = [];
        this.logs = [];
        this.screenshotVideo;
        this.networkSpeed;
        this.testCase = {
            count: 0,
            untitledCount: 0,
            cases: {}
        };
        this.testSuite = {
            count: 0,
            untitledCount: 0,
            suites: {},
            order: [],
            nameMap: {}
        };
        this.tempCommands = [];
    }

    deleteRecord(caseIdText, index) {
        this.testCase.cases[caseIdText].records.splice(index, 1);
        this.setSelectedRecords([]);
        this.setCaseModified(caseIdText, true, true);
    }

    deleteAllRecords(caseIdText) {
        this.testCase.cases[caseIdText].records = [];
        this.setSelectedRecords([]);
    }

    deleteLastRecord(caseIdText) {
        let num = this.getRecordNum(caseIdText);
        this.deleteRecord(caseIdText, num - 1);
    }

    deleteCase(caseIdText) {
        let suiteIdText = this.getTestCase(caseIdText).suiteIdText;
        let cases = this.testSuite.suites[suiteIdText].cases;
        let index = cases.indexOf(caseIdText);
        index >= 0 && cases.splice(index, 1);
        delete this.testCase.cases[caseIdText];
        this.testCase.count--;
        this.setSelectedCases([]);
    }

    deleteSuite(suiteIdText) {
        let suite = this.testSuite.suites[suiteIdText];
        for (let caseIdText of suite.cases) {
            this.deleteCase(caseIdText);
        }
        let index = this.testSuite.order.indexOf(suiteIdText);
        index >= 0 && this.testSuite.order.splice(index, 1);
        delete this.testSuite.suites[suiteIdText];
        this.testSuite.count--;
        this.setSelectedCases([]);
        this.setSelectedSuites([]);
    }

    deleteAllSuites() {
        this.testSuite.count = 0;
        this.testSuite.suites = {};
        this.setSelectedCases([]);
        this.setSelectedSuites([]);
    }

    newUntitledName(type) {
        let name = "";
        let untitledCount = type === "case" ?
            this.testCase.untitledCount : this.testSuite.untitledCount;
        switch (type) {
            case "case":
                name = `Untitled Test Case${untitledCount == 0 ? "" : ` ${untitledCount}`}`;
                break;
            case "suite":
                name = `Untitled Test Suite${untitledCount == 0 ? "" : ` ${untitledCount}`}`;
                break;
            default:
                break;
        }
        return name;
    }

    addTestSuite(title = this.newUntitledName("suite"), cases = []) {
        if (title.includes("Untitled Test Suite")) {
            this.testSuite.untitledCount++;
        }

        let idText = `suite-${this.testSuite.count++}`;
        this.testSuite.suites[idText] = {
            fileName: `${title}.html`,
            title: title,
            cases: cases,
            modified: true,
            status: "default"
        };
        this.testSuite.order.push(idText);
        this.testSuite.nameMap[title] = idText;
        this.setSelectedSuites([idText]);

        return idText;
    }

    addTestCase(title = this.newUntitledName("case"), records = []) {
        if (title.includes("Untitled Test Case")) {
            this.testCase.untitledCount++;
        }

        let suiteIdText = this.getSelectedSuites()[0] !== undefined ?
            this.getSelectedSuites()[0] : this.addTestSuite();
        let idText = `case-${this.testCase.count++}`;
        this.testCase.cases[idText] = {
            title: title,
            records: records,
            suiteIdText: suiteIdText,
            modified: true,
            status: "default"
        };

        this.setSelectedCases([idText]);
        this.appendCaseInSuite(suiteIdText, idText);
        return idText;
    }

    appendCaseInSuite(suiteIdText, caseIdText) {
        this.testSuite.suites[suiteIdText].cases.push(caseIdText);
    }

    setSelectedSuites(idTexts) {
        this.selectedSuiteIdTexts = idTexts;
    }

    setSelectedCases(idTexts) {
        let suiteIdTexts = idTexts.length > 0 ? [this.testCase.cases[idTexts[0]].suiteIdText] : [];
        this.setSelectedSuites(suiteIdTexts);
        this.selectedCaseIdTexts = idTexts;
    }

    setSelectedRecords(idTexts) {
        this.selectedRecordIdTexts = idTexts;
    }

    appendSelectedRecords(idTexts) {
        this.selectedRecordIdTexts = this.selectedRecordIdTexts.concat(idTexts);
    }

    getSelectedSuites() {
        return this.selectedSuiteIdTexts;
    }

    getSelectedCases() {
        return this.selectedCaseIdTexts;
    }

    getCaseIdTextsInSuite(suiteIdText) {
        return this.testSuite.suites[suiteIdText].cases;
    }

    getSelectedRecord() {
        return this.selectedRecordIdTexts[0];
    }

    getSelectedRecords() {
        return this.selectedRecordIdTexts;
    }

    getTestSuite(suiteIdText) {
        return this.testSuite.suites[suiteIdText];
    }

    getTestCase(caseIdText) {
        return this.testCase.cases[caseIdText];
    }

    getRecord(caseIdText, index) {
        return this.testCase.cases[caseIdText].records[index];
    }

    getRecords(caseIdText) {
        return this.testCase.cases[caseIdText].records;
    }

    getRecordNum(caseIdText) {
        return this.testCase.cases[caseIdText].records.length;
    }

    getCaseNumInSuite(suiteIdText) {
        return this.testSuite.suites[suiteIdText].cases.length;
    }

    getCaseNum() {
        return Object.keys(this.testCase.cases).length;
    }

    getSuiteNum() {
        return Object.keys(this.testSuite.suites).length;
    }

    getSuiteKey(suiteName) {
        for (let key in this.testSuite.suites) {
            if (this.testSuite.suites[key].title === suiteName) {
                return key;
            }
        }
        return;
    }

    getCaseKey(suiteIdText, caseName) {
        for (let key of this.testSuite.suites[suiteIdText].cases) {
            if (this.testCase.cases[key].title === caseName) {
                return key;
            }
        }
        return;
    }

    getAllSuiteIdTexts() {
        return Object.keys(this.testSuite.suites);
    }

    getSuiteTitle(suiteIdText) {
        return this.testSuite.suites[suiteIdText].title;
    }

    getCaseTitle(caseIdText) {
        return this.testCase.cases[caseIdText].title;
    }

    getIncludeCaseIdText(includeTarget) {
        let temp = includeTarget.split(".");
        let suiteName = temp[0], caseName = temp[1];
        let suiteIdText = Panel.fileController.getSuiteKey(suiteName);
        return Panel.fileController.getCaseKey(suiteIdText, caseName);
    }

    setSuiteTitle(suiteIdText, title) {
        console.log(suiteIdText, title);
        this.testSuite.suites[suiteIdText].title = title;
        this.testSuite.suites[suiteIdText].fileName = `${title}.html`;
        this.setSuiteModified(suiteIdText, true, false);
    }

    setCaseTitle(caseIdText, title) {
        this.testCase.cases[caseIdText].title = title;
        this.setCaseModified(caseIdText, true, true);
    }

    setSuiteModified(suiteIdText, modified, setCases = false) {
        this.testSuite.suites[suiteIdText].modified = modified;
        if (setCases) {
            let cases = this.testSuite.suites[suiteIdText].cases;
            for (let caseIdText of cases) {
                this.setCaseModified(caseIdText, modified, false);
            }
        }
    }

    setCaseModified(caseIdText, modified, setSuite = true) {
        this.testCase.cases[caseIdText].modified = modified;
        setSuite &&
            this.setSuiteModified(this.testCase.cases[caseIdText].suiteIdText, modified, false);
    }

    setRecordStatusByIndex(caseIdText, index, status) {
        this.testCase.cases[caseIdText].records[index].status = status;
    }

    setRecordStatus(recordRef, status) {
        recordRef.status = status;
    }

    setRecordPreWaitTime(caseIdText, index, preWaitTime) {
        Object.assign(this.testCase.cases[caseIdText].records[index].preWaitTime, preWaitTime);
    }

    getRecordPreWaitTime(caseIdText, index) {
        return this.testCase.cases[caseIdText].records[index].preWaitTime;
    }

    toggleRecordBreakpoint(caseIdText, index) {
        this.testCase.cases[caseIdText].records[index].breakpoint =
            !this.testCase.cases[caseIdText].records[index].breakpoint;
    }

    getRecordBreakpoint(caseIdText, index) {
        return this.testCase.cases[caseIdText].records[index].breakpoint;
    }

    setRecordName(caseIdText, index, name) {
        this.testCase.cases[caseIdText].records[index].name = name;
    }

    insertTarget(caseIdText, index, target) {
        this.testCase.cases[caseIdText].records[index].target.options.splice(0, 0, target);
    }

    setUsedIndex(type, caseIdText, index, usedIndex) {
        this.testCase.cases[caseIdText].records[index][type].usedIndex = usedIndex;
    }

    setRecordFirstTarget(caseIdText, index, target) {
        let recordTarget = this.testCase.cases[caseIdText].records[index].target;
        let prevTarget = recordTarget.options[0];
        this.testCase.cases[caseIdText].records[index].target.options[0] = {
            ...prevTarget, ...target
        };
    }

    setRecordTacValue(caseIdText, index, tac) {
        this.testCase.cases[caseIdText].records[index].target.tac = tac;
    }

    setRecordUsedTarget(caseIdText, index, target) {
        let recordTarget = this.testCase.cases[caseIdText].records[index].target;
        let usedIndex = recordTarget.usedIndex, prevTarget = recordTarget.options[usedIndex];
        this.testCase.cases[caseIdText].records[index].target.options[usedIndex] = {
            ...prevTarget, ...target
        };
    }

    setRecordFirstValue(caseIdText, index, value) {
        let recordValue = this.testCase.cases[caseIdText].records[index].value;
        let prevValue = recordValue.options[0];
        this.testCase.cases[caseIdText].records[index].value.options[0] = {
            ...prevValue, ...value
        };
    }

    setRecordUsedValue(caseIdText, index, value) {
        let recordValue = this.testCase.cases[caseIdText].records[index].value;
        let usedIndex = recordValue.usedIndex, prevValue = recordValue.options[usedIndex];
        this.testCase.cases[caseIdText].records[index].value.options[usedIndex] = {
            ...prevValue, ...value
        };
    }

    setRecordScreenshotByIndex(caseIdText, index, url) {
        this.testCase.cases[caseIdText].records[index].screenshot = url;
    }

    setRecordScreenshot(record, url) {
        record.screenshot = url;
    }

    getRecordScreenshot(caseIdText, index) {
        return this.testCase.cases[caseIdText].records[index].screenshot;
    }

    setScreenshotVideo(video) {
        let old = this.screenshotVideo;
        if (old) {
            window.URL.revokeObjectURL(old);
        }
        this.screenshotVideo = video;
    }

    getScreenshotVideo() {
        return this.screenshotVideo;
    }

    setNetworkSpeed(speed) {
        this.networkSpeed = speed;
    }

    getNetworkSpeed() {
        return this.networkSpeed;
    }

    compareTwoCommand(caseIdText, index1, index2, mode) {
        let command1 = this.testCase.cases[caseIdText].records[index1];
        let command2 = this.testCase.cases[caseIdText].records[index2];

        let name = mode.includes("n") ? true : false;
        let target = mode.includes("t") ? true : false;
        let value = mode.includes("v") ? true : false;

        if (
            (!name || command1.name === command2.name) &&
            (!target || compareTwoArray(command1.target.options, command2.target.options)) &&
            (!value || compareTwoArray(command1.value.options, command2.value.options))
        ) {
            return true;
        }
        return false;
    }

    setRecords(caseIdText, records) {
        this.testCase.cases[caseIdText].records = records;
    }

    setRecordId(caseIdText, index, id) {
        this.testCase.cases[caseIdText].records[index].id = id;
    }

    appendLog(status, log) {
        this.logs.push({
            status: status,
            log: log
        });
    }

    clearLog() {
        this.logs = [];
    }

    clearRecordsStatus(type, records, isDeep = false) {
        for (let record of records) {
            if (isDeep && record.children) {
                if (record.name === "INCLUDE" ||
                    record.name === "WHILE" ||
                    record.name === "IF") {
                    for (let child of record.children) {
                        this.clearRecordsStatus(type, child, isDeep);
                    }
                }
            }
            type === "status" ? this.setRecordStatus(record, "default") :
                this.setRecordScreenshot(record, "");
        }
    }

    clearIncludedRecords(records, isDeep) {
        for (let record of records) {
            record.name === "INCLUDE" &&
                (delete record.children);
        }
    }

    newCommand(name, target, value, preWaitTime, breakpoint, status) {
        return {
            id: "",
            name: name,
            target: {
                usedIndex: 0,
                options: [],
                tac: "",
                ...target
            },
            value: {
                usedIndex: 0,
                options: [],
                tac: "",
                ...value
            },
            preWaitTime: {
                beforeunload: 0, ajax: 0, resource: 0, DOM: 0,
                ...preWaitTime
            },
            screenshot: "",
            breakpoint: breakpoint ? breakpoint : false,
            status: status ? status : "default"
        };
    }

    addCommand(caseIdText, index, name, target, value) {
        let command = this.newCommand(name, target, value);
        let pos = index >= 0 ? index : this.testCase.cases[caseIdText].records.length - 1;
        this.testCase.cases[caseIdText].records.splice(pos, 0, command);

        EntryPoint.workArea.setAutoScroll({ isUsed: true, idText: `records-${pos}` });
        this.setCaseModified(caseIdText, true, true);
        EntryPoint.workArea.syncCommands();
        return { caseIdText: caseIdText, index: pos };
    }

    // This news command, and insert it before the last command
    addCommandBeforeLastCommand(name, target, value) {
        let caseIdText = this.getSelectedCases()[0];
        return this.addCommand(caseIdText, this.getRecordNum(caseIdText) - 1, name, target, value);
    }

    // This news command, and insert it before/after the selected command
    insertCommand(type, name, target, value) {
        let caseIdText = this.getSelectedCases()[0];
        let selectedRecordIdText = this.getSelectedRecord();
        let index = selectedRecordIdText === undefined ?
            this.getRecordNum(caseIdText) - 1 : parseInt(selectedRecordIdText.split("-")[1]);
        if (type === "after") index++;
        return this.addCommand(caseIdText, index, name, target, value);
    }

    // This news command, and append it at the specific command
    addCommandAt(index, name, target, value) {
        let caseIdText = this.getSelectedCases()[0];
        return this.addCommand(caseIdText, index, name, target, value);
    }

    copyCommands() {
        let caseIdText = this.getSelectedCases()[0];
        let recordIdTexts = this.getSelectedRecords();
        this.tempCommands = [];
        for (let idText of recordIdTexts) {
            this.tempCommands.push(cloneDeep(this.getRecord(caseIdText, parseInt(idText.split('-')[1]))));
        }
        return { caseIdText: caseIdText, recordIdTexts: recordIdTexts };
    }

    cutCommands() {
        let temp = this.copyCommands();
        for (let idText of temp.recordIdTexts) {
            this.deleteRecord(temp.caseIdText, parseInt(idText.split('-')[1]));
        }
        return temp;
    }

    pasteCommands() {
        let recordIdText = this.getSelectedRecords()[0];
        if (recordIdText === undefined) return;
        let index = parseInt(recordIdText.split("-")[1]) + 1;
        for (let record of this.tempCommands) {
            this.addCommandAt(index, record.name, record.target, record.value);
            index++;
        }
    }

    isFileNameOpened(fileName) {
        for (let suiteIdText in this.testSuite.suites) {
            if (this.testSuite.suites[suiteIdText].fileName === fileName) {
                return true;
            }
        }
        return false;
    }

    isSuiteNameUsed(name) {
        for (let key in Panel.fileController.testSuite.suites) {
            if (Panel.fileController.testSuite.suites[key].title === name) {
                return true;
            }
        }
        return false;
    }

    isCaseNameUsed(name, suiteIdText) {
        for (let key of Panel.fileController.testSuite.suites[suiteIdText].cases) {
            if (Panel.fileController.testCase.cases[key].title === name) {
                return true;
            }
        }
        return false;
    }

    checkNameValid(name) {
        if (name.length <= 0) {
            return { result: false, message: `You need to type something` };
        }
        if (name.match(/\/|\\|:|\?|"|\*|<|>|\||\./gi) !== null) {
            return { result: false, message: `Name cannot include ".", "/", "\\", ":", "*", "?", """, "<", ">", "|"` };
        }
        return { result: true, message: "success" };
    }

    isFileSaved() {
        return this.saveFile.isFileSaved();
    }
}