import { registerElement } from "nativescript-angular/element-registry";
import { RadioButtonComponent } from './radiobutton.component';
import { RadioGroupComponent } from './radiogroup.component';
import { NgModule } from '@angular/core';
import { RadioGroup, RadioButton } from '../index';

@NgModule({
    declarations: [
        RadioButtonComponent,
        RadioGroupComponent
    ],
    exports: [
        RadioButtonComponent,
        RadioGroupComponent
    ]

})
export class RadioButtonModule { }

registerElement("RadioGroup", () => RadioGroup);
registerElement("RadioButton", () => RadioButton);
