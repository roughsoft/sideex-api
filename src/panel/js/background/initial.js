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
import { browser } from "webextension-polyfill-ts";

import { FileController } from '../IO/file-controller';
import { BackgroundRecorder } from './recorder';
import { Playback } from './playback';
import { VariableController } from './variable-controller';
import { UiTools } from '../UI/uiTools';
import { Setting } from "./setting";
import { Log } from './log';

export var fileController = new FileController(true);
export var recorder = new BackgroundRecorder();
export var playback = new Playback(true);
export var log = new Log();
export var variables = new VariableController();

export var setting = new Setting(true);
export var uiTools = new UiTools();

browser.runtime.onMessage.addListener(recorder.contentWindowIdListener);
browser.runtime.onMessage.addListener(recorder.handleFormatCommand);

window.addEventListener("beforeunload", (event) => {
    (event || window.event).returnValue = false;
});