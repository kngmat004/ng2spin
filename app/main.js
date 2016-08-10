/// <reference path="../typings/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
require('./rxjs-operators');
var app_component_1 = require('./app.component');
var spinner_service_1 = require('./spinner/spinner.service');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    spinner_service_1.SpinnerService
]);
//# sourceMappingURL=main.js.map