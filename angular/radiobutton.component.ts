import {
    Component, ChangeDetectionStrategy, ElementRef
} from "@angular/core";

import { RadioButton } from '../';

@Component({
    selector: "RadioButton",
    template: "",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class RadioButtonComponent {

    private _native: RadioButton;

    constructor(
        private _element: ElementRef
    ) {
        this._native = this._element.nativeElement;
    }

}

