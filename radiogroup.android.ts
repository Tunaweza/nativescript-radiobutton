import { RadioGroupInterface, RadioButtonInterface } from './';
import { View } from "ui/core/view";
import { Color } from "color";
import { isAndroid, device } from "platform";
import { Property, PropertyChangeData } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import { Font } from "ui/styling/font";
import enums = require("ui/enums");
import app = require("application");
import { StackLayout } from 'ui/layouts/stack-layout';
import { Label } from 'ui/label';
declare let android: any;

export class RadioGroup extends StackLayout implements RadioGroupInterface {

    private _android: any; /// android.widget.RadioGroup
    public _fillColor: string;
    public _tintColor: string;
    private _androidViewId: number;

    public static checkedButtonProperty = new Property(
        "checkedButton",
        "RadioGroup",
        new PropertyMetadata(false)
    );


    constructor() {
        super();
    }

    get android() {
        return this._android;
    }

    get _nativeView() {
        return this._android;
    }

    get checkedButton(): number {
        return this._getValue(RadioGroup.checkedButtonProperty);
    }

    set checkedButton(value: number) {
        this._setValue(RadioGroup.checkedButtonProperty, value);
    }

    get fillColor(): string {
        return this._fillColor;
    }

    set fillColor(color: string) {
        this._fillColor = color;

        if (this._android && device.sdkVersion >= "21")
            this._android.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color(this._fillColor).android));
    }

    //There is no difference between tint and fill on the android widget
    get tintColor(): string {
        return this.fillColor;
    }

    set tintColor(color: string) {
        this.fillColor = color;
    }


    public _createUI() {

        this._android = new android.widget.RadioGroup(this._context, null);

        let that = new WeakRef(this);

        this._android.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
            get owner() {
                return that.get();
            },

            onCheckedChanged: function (sender, checkedId: number) {
                if (this.owner) {
                    this.owner._onPropertyChangedFromNative(RadioGroup.checkedButtonProperty, checkedId);
                }
            }
        }));

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);


    }


}


export class RadioButton extends Label implements RadioButtonInterface {

    private _android: any; /// android.widget.RadioButton
    private _fillColor: string;
    private _checkStyle: string;
    private _checkPadding: string;
    private _checkPaddingLeft: string;
    private _checkPaddingTop: string;
    private _checkPaddingRight: string;
    private _checkPaddingBottom: string;
    public static checkedProperty = new Property(
        "checked",
        "RadioButton",
        new PropertyMetadata(false)
    );
    public static enabledProperty = new Property(
        "enabled",
        "RadioButton",
        new PropertyMetadata(false)
    );

    public static textProperty = new Property(
        "text",
        "RadioButton",
        new PropertyMetadata(false)
    );

    constructor() {
        super();
    }

    get android() {
        return this._android;
    }

    get _nativeView() {
        return this._android;
    }

    get checkStyle() {
        return this._checkStyle;
    }

    set checkStyle(style) {
        this._checkStyle = style;
    }

    set checkPadding(padding) {
        this._checkPadding = padding;
    }

    get checkPadding() {
        return this._checkPadding;
    }

    set checkPaddingLeft(padding) {
        this._checkPaddingLeft = padding;
    }

    get checkPaddingLeft() {
        return this._checkPaddingLeft;
    }


    set checkPaddingTop(padding) {
        this._checkPaddingTop = padding;
    }

    get checkPaddingTop() {
        return this._checkPaddingTop;
    }

    set checkPaddingRight(padding) {
        this._checkPaddingRight = padding;
    }

    get checkPaddingRight() {
        return this._checkPaddingRight;
    }

    set checkPaddingBottom(padding) {
        this._checkPaddingBottom = padding;
    }

    get checkPaddingBottom() {
        return this._checkPaddingBottom;
    }

    get checked(): boolean {
        return this._getValue(RadioButton.checkedProperty);
    }

    set checked(value: boolean) {
        this._setValue(RadioButton.checkedProperty, value);
    }

    get enabled(): boolean {
        return this._getValue(RadioButton.enabledProperty);
    }

    set enabled(value: boolean) {
        this._setValue(RadioButton.enabledProperty, value);
    }

    get text(): string {
        return this._getValue(RadioButton.textProperty);
    }

    set text(value: string) {
        this._setValue(RadioButton.textProperty, value);
    }

    get fillColor(): string {
        return this._fillColor;
    }

    set fillColor(color: string) {
        this._fillColor = color;

        if (this._android && device.sdkVersion >= "21")
            this._android.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color(this._fillColor).android));
    }

    //There is no difference between tint and fill on the android widget
    get tintColor(): string {
        return this.fillColor;
    }

    set tintColor(color: string) {
        this.fillColor = color;
    }


    public _createUI() {

        // this._android = new android.widget.RadioButton(this._context, null);
        this._android = new android.widget.RadioButton(this._context, null);

        if (this.checkPaddingLeft) {
            this._android.setPadding(parseInt(this.checkPaddingLeft), this._android.getPaddingTop(), this._android.getPaddingRight(), this._android.getPaddingBottom());
        }

        if (this.checkPaddingTop) {
            this._android.setPadding(this._android.getPaddingLeft(), parseInt(this.checkPaddingTop), this._android.getPaddingRight(), this._android.getPaddingBottom());
        }

        if (this.checkPaddingRight) {
            this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), parseInt(this.checkPaddingRight), this._android.getPaddingBottom());
        }

        if (this.checkPaddingBottom) {
            this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), this._android.getPaddingRight(), parseInt(this.checkPaddingBottom));
        }

        if (this.checkPadding) {
            let pads = this.checkPadding.toString().split(',');
            switch (pads.length) {
                case 1:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[0]), parseInt(pads[0]), parseInt(pads[0]));
                    break;
                case 2:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[0]), parseInt(pads[1]));
                    break;
                case 3:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[2]), parseInt(pads[1]));
                    break;
                case 4:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[2]), parseInt(pads[3]));
                    break;
            }
        }
        if (this.text) {
            this._android.setText(this.text);
        }

        if (this.enabled) {
            this._android.setEnabled(this.enabled);
        }

        /// works with class styling - Brad
        if (!this.fontSize) {
            this.fontSize = 15;
        }

        if (this._checkStyle) {
            const drawable = app.android.context.getResources().getIdentifier(this._checkStyle, "drawable", app.android.context.getPackageName());
            this._android.setButtonDrawable(drawable);
        }


        if (this._android) {
            if (this.fillColor) {
                android.support.v4.widget.CompoundButtonCompat.setButtonTintList(this._android, android.content.res.ColorStateList.valueOf(new Color(this._fillColor).android));
            }
        }

        let that = new WeakRef(this);

        this._android.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
            get owner() {
                return that.get();
            },

            onCheckedChanged: function (sender, isChecked) {
                if (this.owner) {
                    this.owner._onPropertyChangedFromNative(RadioButton.checkedProperty, isChecked);
                }
            }
        }));

    }

    public toggle(): void {
        this._android.toggle();
    }
}


function onCheckedPropertyChanged(data: PropertyChangeData) {
    let cBox = <RadioButton>data.object;
    if (!cBox.android) {
        return;
    }

    cBox.android.setChecked(data.newValue);
}

// register the setNativeValue callbacks
(<PropertyMetadata>RadioButton.checkedProperty.metadata).onSetNativeValue = onCheckedPropertyChanged;

function onEnabledPropertyChanged(data: PropertyChangeData) {
    let cBox = <RadioButton>data.object;
    if (!cBox.android) {
        return;
    }

    cBox.android.setEnabled(data.newValue);
}

// register the setNativeValue callbacks
(<PropertyMetadata>RadioButton.enabledProperty.metadata).onSetNativeValue = onEnabledPropertyChanged;


function onTextPropertyChanged(data: PropertyChangeData) {
    let cBox = <RadioButton>data.object;
    if (!cBox.android) {
        return;
    }

    cBox.android.setText(data.newValue);
}

// register the setNativeValue callbacks
(<PropertyMetadata>RadioButton.textProperty.metadata).onSetNativeValue = onTextPropertyChanged;

//
// export class RadioButtonStyler implements style.Styler {
//     private static setColorLabelProperty(view: any, newValue: any) {
//         let cb = <android.widget.RadioButton>view._nativeView;
//         if (cb) {
//             (<any>cb).setTextColor(new Color(newValue).android);
//         }
//     }
//
//     // font
//     private static setFontInternalProperty(view: any, newValue: any, nativeValue?: any) {
//         let tv = <android.widget.RadioButton>view._nativeView;
//         let fontValue = <Font>newValue;
//
//         let typeface = fontValue.getAndroidTypeface();
//         if (typeface) {
//             tv.setTypeface(typeface);
//         }
//         else {
//             tv.setTypeface(nativeValue.typeface);
//         }
//
//         if (fontValue.fontSize) {
//             tv.setTextSize(fontValue.fontSize);
//         }
//         else {
//             tv.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, nativeValue.size);
//         }
//     }
//
//     private static resetFontInternalProperty(view: any, nativeValue: any) {
//         let tv: android.widget.RadioButton = <android.widget.RadioButton>view._nativeView;
//         if (tv && nativeValue) {
//             tv.setTypeface(nativeValue.typeface);
//             tv.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, nativeValue.size);
//         }
//     }
//
//     private static getNativeFontInternalValue(view: any): any {
//         let tv: android.widget.TextView = <android.widget.RadioButton>view._nativeView;
//         return {
//             typeface: tv.getTypeface(),
//             size: tv.getTextSize()
//         };
//     }
//
//     private static resetColorProperty(view: View, nativeValue: number) {
//         // Do nothing.
//     }
//
//
//     public static registerHandlers() {
//         style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(
//             RadioButtonStyler.setColorLabelProperty,
//             RadioButtonStyler.resetColorProperty), "RadioButton");
//
//         style.registerHandler(style.fontInternalProperty, new style.StylePropertyChangedHandler(
//             RadioButtonStyler.setFontInternalProperty,
//             RadioButtonStyler.resetFontInternalProperty,
//             RadioButtonStyler.getNativeFontInternalValue), "RadioButton");
//
//         style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(
//             RadioButtonStyler.setColorLabelProperty,
//             RadioButtonStyler.resetColorProperty), "RadioButton");
//     }
// }

// RadioButtonStyler.registerHandlers();