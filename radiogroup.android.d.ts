import { RadioGroupInterface, RadioButtonInterface } from './';
import { Property } from "ui/core/dependency-observable";
import { StackLayout } from 'ui/layouts/stack-layout';
import { Label } from 'ui/label';
export declare class RadioGroup extends StackLayout implements RadioGroupInterface {
    private _android;
    _fillColor: string;
    _tintColor: string;
    private _androidViewId;
    static checkedButtonProperty: Property;
    constructor();
    readonly android: any;
    readonly _nativeView: any;
    checkedButton: number;
    fillColor: string;
    tintColor: string;
    _createUI(): void;
}
export declare class RadioButton extends Label implements RadioButtonInterface {
    private _android;
    private _fillColor;
    private _checkStyle;
    private _checkPadding;
    private _checkPaddingLeft;
    private _checkPaddingTop;
    private _checkPaddingRight;
    private _checkPaddingBottom;
    static checkedProperty: Property;
    static enabledProperty: Property;
    static textProperty: Property;
    constructor();
    readonly android: any;
    readonly _nativeView: any;
    checkStyle: string;
    checkPadding: string;
    checkPaddingLeft: string;
    checkPaddingTop: string;
    checkPaddingRight: string;
    checkPaddingBottom: string;
    checked: boolean;
    enabled: boolean;
    text: string;
    fillColor: string;
    tintColor: string;
    _createUI(): void;
    toggle(): void;
}
