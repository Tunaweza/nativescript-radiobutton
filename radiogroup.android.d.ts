import { RadioGroupInterface, RadioButtonInterface } from './';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
export declare class RadioGroup extends StackLayout implements RadioGroupInterface {
    nativeViewProtected: android.widget.RadioGroup;
    private _android;
    _fillColor: string;
    _tintColor: string;
    private _androidViewId;
    constructor();
    readonly android: any;
    readonly nativeView: any;
    checkedButton: number;
    fillColor: string;
    tintColor: string;
    createNativeView(): void;
}
export declare const checkedButtonProperty: any;
export declare class RadioButton extends Label implements RadioButtonInterface {
    nativeViewProtected: android.widget.RadioButton;
    private _android;
    private _fillColor;
    private _checkStyle;
    private _checkPadding;
    private _checkPaddingLeft;
    private _checkPaddingTop;
    private _checkPaddingRight;
    private _checkPaddingBottom;
    constructor();
    readonly android: any;
    readonly nativeView: any;
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
    createNativeView(): void;
    toggle(): void;
}
export declare const checkedProperty: any;
export declare const enabledProperty: any;
export declare const textProperty: any;
