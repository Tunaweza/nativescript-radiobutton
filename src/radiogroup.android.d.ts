import { RadioGroupInterface, RadioButtonInterface } from './';
import { CssProperty, Property, Style } from 'tns-core-modules/ui/core/view';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
export declare const colorProperty: CssProperty<Style, string>;
export declare const checkedButtonProperty: Property<RadioGroup, number>;
export declare class RadioGroup extends StackLayout implements RadioGroupInterface {
    nativeViewProtected: android.widget.RadioGroup;
    static selectedEvent: string;
    private _android;
    private _androidViewId;
    constructor();
    readonly android: any;
    readonly nativeView: any;
    checkedButton: number;
    createNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
}
export declare const checkedProperty: Property<RadioButton, boolean>;
export declare const enabledProperty: Property<RadioButton, boolean>;
export declare const textProperty: Property<RadioButton, string>;
export declare class RadioButton extends Label implements RadioButtonInterface {
    nativeViewProtected: android.widget.RadioButton;
    private _android;
    private _checkStyle;
    private _checkPadding;
    private _checkPaddingLeft;
    private _checkPaddingTop;
    private _checkPaddingRight;
    private _checkPaddingBottom;
    private _androidViewId;
    checked: boolean;
    constructor();
    readonly android: any;
    readonly nativeView: any;
    checkStyle: string;
    checkPadding: string;
    checkPaddingLeft: string;
    checkPaddingTop: string;
    checkPaddingRight: string;
    checkPaddingBottom: string;
    enabled: boolean;
    text: string;
    createNativeView(): any;
    toggle(): void;
}
