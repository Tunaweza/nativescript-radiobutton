import { RadioGroupInterface, RadioButtonInterface } from './';
import {
  booleanConverter,
  CssProperty,
  Property,
  Style,
  View
} from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';
import { isAndroid, device } from 'tns-core-modules/platform';
import { Font } from 'tns-core-modules/ui/styling/font';
import enums = require('tns-core-modules/ui/enums');
import app = require('tns-core-modules/application');
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';


interface GroupCheckedChangeListener {
    //new (owner: RadioGroup): android.widget.CompoundButton.OnCheckedChangeListener;
    new (owner: RadioGroup): android.widget.RadioGroup.OnCheckedChangeListener;
}

let GroupCheckedChangeListener: GroupCheckedChangeListener;

function initializeGroupCheckedChangeListener(): void {
  if (GroupCheckedChangeListener) {
      return;
  }

  @Interfaces([android.widget.RadioGroup.OnCheckedChangeListener])
    class GroupCheckedChangeListenerImpl extends java.lang.Object implements android.widget.RadioGroup.OnCheckedChangeListener {
      constructor(private owner: RadioGroup) {
          super();
          return global.__native(this);
      }

      onCheckedChanged(sender, checkedId: number) {
        if (this.owner) {
            checkedButtonProperty.nativeValueChange(this.owner, checkedId);
            const view = this.owner.android.findViewById(checkedId);
            this.owner.notify({
              eventName: RadioGroup.selectedEvent,
              object: this.owner,
              checkId: checkedId,
              value: view.getText(),
            })
        }
      }
  }

  GroupCheckedChangeListener = GroupCheckedChangeListenerImpl as any;
}

interface ButtonCheckedChangeListener {
  new (owner: RadioButton): android.widget.CompoundButton.OnCheckedChangeListener;
}

let ButtonCheckedChangeListener: ButtonCheckedChangeListener;

function initializeButtonCheckedChangeListener(): void {
  if (ButtonCheckedChangeListener) {
      return;
  }

  @Interfaces([android.widget.CompoundButton.OnCheckedChangeListener])
  class ButtonCheckedChangeListenerImpl extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {
      constructor(private owner: RadioButton) {
          super();
          return global.__native(this);
      }

      onCheckedChanged(buttonView: android.widget.CompoundButton, isChecked: boolean) {
        if (this.owner) {
            checkedButtonProperty.nativeValueChange(this.owner, isChecked);
        }
      }
  }

  ButtonCheckedChangeListener = ButtonCheckedChangeListenerImpl as any;
}


// RadioGroup properties

export const checkedButtonProperty = new Property<RadioGroup, number>(
  {name: 'checkedButton'}
);


// RadioGroup definition

export class RadioGroup extends StackLayout implements RadioGroupInterface {
    nativeViewProtected: android.widget.RadioGroup;

    public static selectedEvent = 'selected';

    private _android: any; /// android.widget.RadioGroup
    public _fillColor: string;
    public _tintColor: string;
    private _androidViewId: number;

    constructor() {
      super();
    }

    get android() {
        return this._android;
    }

    get nativeView() {
        return this._android;
    }

    get checkedButton(): number {
        return this._getValue(checkedButtonProperty);
    }

    set checkedButton(value: number) {
        this._setValue(checkedButtonProperty, value);
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

    public createNativeView() {
        initializeGroupCheckedChangeListener();

        this._android = new android.widget.RadioGroup(this._context);

        const listener = new GroupCheckedChangeListener(this);
        this._android.setOnCheckedChangeListener(listener);
        (<any>this._android).listener = listener;

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
        return this._android;
    }

    public initNativeView(): void {
        super.initNativeView();
        const nativeView: any = this.nativeViewProtected;
        nativeView.listener.owner = this;
    }

    public disposeNativeView() {
        const nativeView: any = this.nativeViewProtected;
        nativeView.listener.owner = null;
        super.disposeNativeView();
    }
}

checkedButtonProperty.register(RadioGroup);


// RadioButton properties

export const checkedProperty = new Property<RadioButton, boolean>({
  name: 'checked',
  defaultValue: false,
  valueConverter: booleanConverter
});


export const enabledProperty = new Property<RadioButton, boolean>({
  name: 'enabled',
  defaultValue: true,
  valueConverter: booleanConverter
});

export const textProperty = new Property<RadioButton, string>({
  name: 'text'
});

export const fillColorProperty = new CssProperty<Style, string>({
  name: 'fillColor',
  cssName: 'fill-color',
  valueConverter: v => {
    return String(v);
  }
});

export const tintColorProperty = new CssProperty<Style, string>({
  name: 'tintColor',
  cssName: 'tint-color',
  defaultValue: 'black',
  valueConverter: v => {
    return String(v);
  }
});


// RadioButton definition

export class RadioButton extends Label implements RadioButtonInterface {
    nativeViewProtected: android.widget.RadioButton;

    private _android: any; /// android.widget.RadioButton
    private _checkStyle: string;
    private _checkPadding: string;
    private _checkPaddingLeft: string;
    private _checkPaddingTop: string;
    private _checkPaddingRight: string;
    private _checkPaddingBottom: string;
    private _androidViewId: number;
    public checked: boolean;

    constructor() {
        super();
    }

    get android() {
        return this._android;
    }

    get nativeView() {
        return this._android;
    }

    get checkStyle() {
        return this._checkStyle;
    }

    set checkStyle(style) {
        this._checkStyle = style;
    }

    get checkPadding() {
        return this._checkPadding;
    }

    set checkPadding(padding) {
        this._checkPadding = padding;
    }

    get checkPaddingLeft() {
        return this._checkPaddingLeft;
    }

    set checkPaddingLeft(padding) {
        this._checkPaddingLeft = padding;
    }

    get checkPaddingTop() {
        return this._checkPaddingTop;
    }

    set checkPaddingTop(padding) {
        this._checkPaddingTop = padding;
    }

    get checkPaddingRight() {
        return this._checkPaddingRight;
    }

    set checkPaddingRight(padding) {
        this._checkPaddingRight = padding;
    }

    get checkPaddingBottom() {
        return this._checkPaddingBottom;
    }

    set checkPaddingBottom(padding) {
        this._checkPaddingBottom = padding;
    }

    [checkedProperty.getDefault](): boolean {
      return false;
    }

    [checkedProperty.setNative](value: boolean) {
      this.nativeViewProtected.setChecked(Boolean(value));
    }

    [textProperty.getDefault](): string {
      return "";
    }

    [textProperty.setNative](value: string) {
      this.nativeViewProtected.setText(java.lang.String.valueOf(value));
    }

    get enabled(): boolean {
        return this._getValue(enabledProperty);
    }

    set enabled(value: boolean) {
        this._setValue(enabledProperty, value);
    }

    get text(): string {
        return this._getValue(textProperty);
    }

    set text(value: string) {
        this._setValue(textProperty, value);
    }

    get fillColor(): string {
        return (<any>this.style).fillColor;
    }
    set fillColor(color: string) {
        (<any>this.style).fillColor = color;
        if (this._android && device.sdkVersion >= "21") {
            this._android.setButtonTintList(
                android.content.res.ColorStateList.valueOf(new Color(color).android)
            );
        }
    }

    // there is no difference between tint and fill on the android widget
    get tintColor(): string {
        return (<any>this.style).fillColor;
    }

    set tintColor(color: string) {
        (<any>this.style).fillColor = color;
    }

    public createNativeView() {
        initializeButtonCheckedChangeListener();

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

        const listener = new ButtonCheckedChangeListener(this);
        this._android.setOnCheckedChangeListener(listener);
        (<any>this._android).listener = listener;

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);

        return this._android;
    }

    public toggle(): void {
        this._android.toggle();
    }
}

checkedProperty.register(RadioButton);
enabledProperty.register(RadioButton);
textProperty.register(RadioButton);
fillColorProperty.register(Style);
tintColorProperty.register(Style);
