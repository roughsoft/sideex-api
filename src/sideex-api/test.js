import { SideeX } from './index';
const sideex = new SideeX();
var zero = 0;
var input = document.getElementById('input');
var all = document.getElementById('all');
var suite = document.getElementById('suite');
var cases = document.getElementById('case');
var yellow = document.getElementById('change_yellow');
var white = document.getElementById('change_white');
var color = document.getElementById('color');
var tests = document.getElementById('test');
var cc = document.getElementById('cc');
cc.addEventListener("click", async () => {
    /*testsuite
    console.log(sideex.file.testSuite.add());
    console.log(sideex.file.testSuite.get("suite-0"));
    console.log(sideex.file.testSuite.rename("suite-0", "tyler"));
    console.log(sideex.file.testSuite.getSuiteIdText("tyler"));
    console.log(sideex.file.testSuite.copy());
    console.log(sideex.file.testSuite.checkSuitesOrder());
    console.log(sideex.file.testSuite.close("suite-0"));
    console.log(sideex.file.testSuite.checkSuitesOrder());
    console.log(sideex.file.testSuite.add());
    console.log(sideex.file.testSuite.add());
    console.log(sideex.file.testSuite.add());
    console.log(sideex.file.testSuite.add());
    console.log(sideex.file.testSuite.add());
    console.log(sideex.file.testSuite.close("suite-1"));
    console.log(sideex.file.testSuite.getSelected());
    console.log(sideex.file.testSuite.close("suite-3"));
    console.log(sideex.file.testSuite.checkSuitesOrder());
    console.log(sideex.file.testSuite.setSelected(["suite-2"]));
    console.log(sideex.file.testSuite.getSelected());
    console.log(sideex.file.testSuite.setSelected(["suite-2", "suite-4"]));
    console.log(sideex.file.testSuite.getSelected());
    console.log(sideex.file.testSuite.setSelected(["suite-3"]));
    console.log(sideex.file.testSuite.getSelected());
    // console.log(sideex.file.testSuite.close("suite-1"));
    console.log(sideex.file.testSuite.checkSuitesOrder());
    console.log(sideex.file.testSuite.getSelected());
    console.log(sideex.file.testSuite.closeAll());
    console.log(sideex.file.testSuite.getSelected());
    console.log(sideex.file.testSuite.checkSuitesOrder());
    */
    /*testcase
   console.log(sideex.file.testSuite.add());
   console.log(sideex.file.testCase.add());
   console.log(sideex.file.testCase.get("case-0"));
   console.log(sideex.file.testCase.rename("case-0", "tt"));
   console.log(sideex.file.testCase.getCaseIdText("tt"));
   console.log(sideex.file.testCase.add());
   console.log(sideex.file.testCase.getCasesOrder());
   console.log(sideex.file.testCase.getSelected());
   console.log(sideex.file.testCase.copy());
   console.log(sideex.file.testCase.getCasesOrder());
   console.log(sideex.file.testCase.cut(["case-1"]));
   console.log(sideex.file.testCase.getCasesOrder());
   console.log(sideex.file.testCase.remove("case-1"));
   console.log(sideex.file.testCase.getSelected());
   console.log(sideex.file.testCase.add());
   console.log(sideex.file.testCase.add());
   console.log(sideex.file.testCase.getSelected());
   console.log(sideex.file.testCase.add());
   console.log(sideex.file.testCase.getSelected());
   console.log(sideex.file.testCase.getCasesOrder());
   */
    /*record
  console.log(sideex.file.testSuite.add());
  console.log(sideex.file.testCase.add());
  console.log(sideex.file.record.add({name:"1"}));
  console.log(sideex.file.record.add({name:"2"}));
  console.log(sideex.file.record.add({name:"3"}));
  console.log(sideex.file.testCase.get("case-0"));
  console.log(sideex.file.record.delete(0));
  console.log(sideex.file.record.get(0));
  console.log(sideex.file.testCase.get("case-0"));
  console.log(sideex.file.record.add());
  console.log(sideex.file.record.add());
  console.log(sideex.file.record.add());
  console.log(sideex.file.testCase.get("case-0"));
  console.log(sideex.file.record.deleteAll());
  console.log(sideex.file.testCase.get("case-0"));
  console.log(sideex.file.record.add({name:"1"}));
  console.log(sideex.file.record.add({name:"2"}));
  console.log(sideex.file.record.add({name:"3"}));
  console.log(sideex.file.record.getSelected());
  console.log(sideex.file.record.setSelected(["records-0"]));
  console.log(sideex.file.record.getSelected());
  console.log(sideex.file.record.delete(0));
  console.log(sideex.file.record.getSelected());
  console.log(sideex.file.record.add());
  console.log(sideex.file.record.getSelected());
  console.log(sideex.file.testCase.get("case-0"));
  */
    /* variables
    console.log(sideex.variables.add("tyler", 5646));
    console.log(sideex.variables.add("terry", 46));
    console.log(sideex.variables.add("asd", 123));
    console.log(sideex.variables.get("vars"));
    console.log(sideex.variables.get("count"));
    console.log(sideex.variables.get("startNum"));
    console.log(sideex.variables.get("varNames"));
    console.log(sideex.variables.delete("var-1"));
    console.log(sideex.variables.get("vars"));
    console.log(sideex.variables.clearAll());
    console.log(sideex.variables.get("vars"));
    console.log(sideex.variables.add("tyler", 5646));
    console.log(sideex.variables.add("terry", 46));
    console.log(sideex.variables.add("asd", 123));
    console.log(sideex.variables.changeName("var-1","zz"));
    console.log(sideex.variables.changeValue("var-1",11111));
    console.log(sideex.variables.get("vars"));
*/
/*log
console.log(sideex.log.get("logs"));
console.log(sideex.log.get("typeMap"));
console.log(sideex.log.clear());
console.log(sideex.log.get("logs"));
console.log(sideex.log.get("typeMap"));
*/
let file = sideex.file.testSuite.save();
console.log(file);

sideex.file.testSuite.load(file);
});
input.addEventListener("change", handlefile, false);
all.addEventListener("click", ()=>{
    sideex.playback.start("suite");
}, false);
suite.addEventListener("click", ()=>{

    const converCommand = (recordNum, cmdName, value) =>{
        let caseIdText = sideex.file.testCase[0];
        let record = sideex.file.command.get(recordNum, caseIdText);
        record.name = cmdName;
        let passstr = "";
        var passValue = {
            value: 0,
            selectValue: "",
            showText: "",
            typeWriting: ""
        };
        let passlist = record.value.options[0].value.split(" | ");
        passValue.value = passlist[0];
        if (findIndex(passlist, "selectValue") != -1) {
            let index = findIndex(passlist, "selectValue");
            let tempstr = passlist[index];
            tempstr = tempstr.replace("selectValue:", "");
            if (tempstr.indexOf(value) != -1) {
                tempstr = tempstr.replace(",", "");
                tempstr = tempstr.replace(value, "");
            } else {
                tempstr = tempstr.concat(",", value);
            }
            console.log(tempstr);
            passValue.selectValue = tempstr;
        } else {
            passValue.selectValue = value;
        }
        if (value == "showText") {
            let str = prompt("enter the text");
            passValue.showText = str;
        }
        if (value == "typeWriting") {
            let str = prompt("enter the text");
            passValue.typewriting = str;
        }
        passstr = passstr.concat(passValue.value, " | ", "selectValue:", passValue.selectValue, " | ", "showText:", passValue.showText, " | ", "typeWriting:", passValue.typeWriting);
        record.value.options[0].value = passstr;

    };



    const findIndex = (list, str) => {
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i].indexOf(str) != -1) {
                return i;
            }
        }
        return -1;
    };

    const addcss = (css) => {
        var head = document.getElementsByTagName('head')[0];
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
    };

    const writing = (str, element, callback) => {
        var i = 0;
        element.textContent = "";
        var write = setInterval(() => {
            if (str.length != 0 && element.textContent.length != str.length) {
                element.textContent = element.textContent.concat(str[i]);
                i ++;
            } else {
                element.textContent = "";
                clearInterval(write);
                if (callback) {
                    callback(str, element, null);
                }
            }
        }, 300);
    };



    sideex.playback.addCustomCommand(
        "animation", true,

        async function(locator, coordString) {

            var list = coordString.split(" | ");

            coordString = list[0];

            // console.log(sideex.playback.findElement(locator));
            // console.log(sideex.playback.getClientXY(element, coordString));
            var element = sideex.playback.findElement(locator);
            var clientXY = sideex.playback.getClientXY(element, coordString);
            // console.log(clientXY)
            var body = document.getElementsByTagName("body");
            var originalzIndex = element.style.zIndex;
            element.doClick = 0;
            if (list[1].indexOf("clickAnimation") != -1) {
                var newDiv1 = document.createElement("div");
                var triangle = document.createElement("div");
                var rectangle = document.createElement("div");
                var triangleBlack = document.createElement("div");
                var rectangleBlack = document.createElement("div");
                triangle.id = "triangle";
                rectangle.id = "rectangle";
                triangleBlack.id = "triangleBlack";
                rectangleBlack.id = "rectangleBlack";
                newDiv1.id = "newDiv1";
                addcss("#triangle { width: 0; height: 0; border-style: solid; border-width: 0 35px 80px 35px; border-color: transparent transparent white transparent; transform: rotate(-45deg); position: absolute;}");
                addcss("#rectangle { width: 25px; height: 50px; background-color: white; transform: rotate(-45deg); position: absolute;}");
                addcss("#triangleBlack { width: 0; height: 0; border-style: solid; border-width: 0 40px 85px 40px; border-color: transparent transparent black transparent; transform: rotate(-45deg); position: absolute;}");
                addcss("#rectangleBlack { width: 30px; height: 55px; background-color: black; transform: rotate(-45deg); position: absolute;}");
                addcss("#newDiv1 { width: 100px; height: 100px; position : absolute; animation: flash 5s; }");
                addcss("@keyframes flash {from,50%,to {opacity: 1;}25%,75% {opacity: 0;}");
                newDiv1.appendChild(triangleBlack);
                newDiv1.appendChild(rectangleBlack);
                newDiv1.appendChild(triangle);
                newDiv1.appendChild(rectangle);
                triangleBlack.style.left = newDiv1.offsetLeft + 1 + "px";
                triangleBlack.style.top = newDiv1.offsetTop + 1 + "px";
                triangle.style.left = newDiv1.offsetLeft + 1 + "px";
                triangle.style.top = newDiv1.offsetTop + 1 + "px";
                rectangleBlack.style.left = triangleBlack.offsetLeft + 50 + "px";
                rectangleBlack.style.top = triangleBlack.offsetTop + 43 + "px";
                rectangle.style.left = triangle.offsetLeft + 50 + "px";
                rectangle.style.top = triangle.offsetTop + 43 + "px";
                newDiv1.style.left = this.getElementPositionLeft(locator) + element.offsetWidth + "px";
                newDiv1.style.top = this.getElementPositionTop(locator) + element.offsetHeight + "px";
                newDiv1.style.zIndex = 9999;
                element.style.zIndex = 9999;
                body[0].appendChild(newDiv1);
                if ((newDiv1.offsetWidth + newDiv1.offsetLeft) > window.innerWidth) {
                    newDiv1.style.left = null;
                    newDiv1.style.right = 0 + "px";
                }
            }
            if (list[1].indexOf("focus") != -1) {
                var newDiv2 = document.createElement("div");
                newDiv2.style.position = "absolute";
                newDiv2.style.height = element.offsetHeight + "px";
                newDiv2.style.width = element.offsetWidth + "px";
                newDiv2.style.left = this.getElementPositionLeft(locator) + "px";
                newDiv2.style.top = this.getElementPositionTop(locator) + "px";
                newDiv2.style.boxShadow = " 0 0 0 99999px rgba(0, 0, 0, .8)";
                newDiv2.style.zIndex = 9998;
                element.style.zIndex = 9999;
                // 2147483647 is maximum
                body[0].appendChild(newDiv2);
            }
            if (list[1].indexOf("showText") != -1) {
                var newDiv3 = document.createElement("div");
                newDiv3.style.backgroundColor = "#6d96dd";
                newDiv3.style.border = "3px #173581 solid";
                newDiv3.style.position = "fixed";
                newDiv3.style.height = 10 + "vh";
                newDiv3.style.width = 100 + "vw";
                newDiv3.style.fontSize = 5 + "vh";
                newDiv3.style.bottom = 0;
                newDiv3.style.left = 0;
                newDiv3.style.zIndex = 9999;
                newDiv3.style.color = "white";
                newDiv3.style.textAlign = "center";
                list[2] = list[2].replace("showText:", "");
                newDiv3.textContent = list[2];
                body[0].appendChild(newDiv3);
            }
            if (list[1].indexOf("typeWriting") != -1) {
                list[3] = list[3].replace("typeWriting:", "");
                writing(text[1], element, writing);
            }
            if (list[1].indexOf("clickAnimation") != -1) {
                element.addEventListener("click", function() {
                    if (newDiv1) {
                        body[0].removeChild(newDiv1);
                    }
                    if (newDiv2) {
                        body[0].removeChild(newDiv2);
                    }
                    if (newDiv3) {
                        body[0].removeChild(newDiv3);
                    }
                    element.doClick ++;
                    element.style.zIndex = originalzIndex;
                });
                if (newDiv2) {
                    newDiv2.addEventListener("click", (event)=>{
                        this.browserBot.fireMouseEvent(element, 'click', true, event.clientX, event.clientY);
                    });
                }
            } else {
                var nextbtn = document.createElement("button");
                nextbtn.innerHTML = "next";
                nextbtn.style.position = "absolute";
                nextbtn.style.height = 5 + "vh";
                nextbtn.style.width = 5 + "vw";
                nextbtn.style.fontSize = 3 + "vh";
                nextbtn.style.left = this.getElementPositionLeft(locator) + element.offsetWidth + "px";
                nextbtn.style.top = this.getElementPositionTop(locator) + element.offsetHeight + "px";
                nextbtn.style.zIndex = 9999;
                body[0].appendChild(nextbtn);
                if ((nextbtn.offsetWidth + nextbtn.offsetLeft) > window.innerWidth) {
                    nextbtn.style.left = null;
                    nextbtn.style.right = 0 + "px";
                }
                nextbtn.addEventListener("click", function(e) {
                    if (newDiv2) {
                        body[0].removeChild(newDiv2);
                    }
                    if (newDiv3) {
                        body[0].removeChild(newDiv3);
                    }
                    body[0].removeChild(nextbtn);
                    element.doClick ++;
                    element.style.zIndex = originalzIndex;
                });
            }

            while (!element.doClick) {
                await new Promise((resolve) => { setTimeout(resolve, 10); });
            }
            // END
        }

    );
    converCommand(0, "animation", "focus");
    converCommand(1, "animation", "showText");



}, false);
cases.addEventListener("click", ()=>{
    console.log(sideex.file.testCase.get("case-0"));
    console.log(sideex.file.testCase.get("case-1"));
    console.log(sideex.file.command.get(0));
    console.log(sideex.file.command.get(1));
}, false);
yellow.addEventListener("click", ()=>{
    console.log(sideex.recorder.start());
    zero = 1;
}, false);
white.addEventListener("click", ()=>{
    if(zero){
        console.log(sideex.recorder.stop());
        zero = 0;
        console.log("yes");
    }
    console.log(sideex.file.testCase.getSelected());
    console.log(sideex.file.testSuite.getSelected());
}, false);
tests.addEventListener("click", ()=>{
    color.style.backgroundColor = "white";
    console.log(sideex.file.command.get(0));
    let jsonString = sideex.file.testSuite.save();//serialize the recorded commands to a JSON string
    console.log(jsonString);
    console.log(sideex.file.testSuite.closeAll());
    console.log(sideex.file.testSuite.getSuitesOrder());
    console.log(sideex.file.testSuite.load(jsonString));//load the jsonString
    console.log(sideex.file.testSuite.getSuitesOrder());
    // console.log(sideex.file.record.get(0));
    // let record = sideex.file.record.get(0);
    // record.name = "Hello";
    // console.log(sideex.file.record.get(0));
    // sideex.playback.addCustomCommand("Hello", true, (target, value) => {
    //     console.log(target);
    //     console.log(value);
    //     var element = sideex.playback.findElement(target);
    //     var clientXY = sideex.playback.getClientXY(element, value);
    //     console.log(element, clientXY);
    //     console.log("Welcome to SideeX Api!!!");
    // }
    // );
    // sideex.playback.start();
}, false);
color.addEventListener("click", ()=>{
    color.style.backgroundColor = "yellow";
    sideex.file.testCase.remove("case-0");
}, false);

function handlefile() {
    var file = this.files[0];
    console.log(file);
    sideex.file.testSuite.load(file);

}





