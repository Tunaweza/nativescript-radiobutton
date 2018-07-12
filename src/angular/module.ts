import { registerElement } from "nativescript-angular/element-registry";
import { NgModule } from '@angular/core';
import { RadioGroup, RadioButton } from '../';
import { RADIOBUTTON_DIRECTIVES } from './directives';
registerElement("RadioGroup", () => require("nativescript-radiobutton").RadioGroup);
registerElement("RadioButton", () => require("nativescript-radiobutton").RadioButton);

@NgModule({
    declarations: [
        RADIOBUTTON_DIRECTIVES
    ],
    exports: [
        RADIOBUTTON_DIRECTIVES
    ]

})
export class RadioButtonModule { }
