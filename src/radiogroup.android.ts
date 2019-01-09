import { RadioGroupInterface, RadioButtonInterface } from './';
import {
  booleanConverter,
  InheritedCssProperty,
  CssProperty,
  Property,
  Style,
} from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';
import { layout } from "tns-core-modules/utils/utils";
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

// Common properties (for both RadioGroup and RadioButton)
export const colorProperty = new InheritedCssProperty<Style, Color>({
  name: 'color',
  cssName: 'color',
  equalityComparer: Color.equals, 
  defaultValue: new Color("blue"),
  valueConverter: (value) => new Color(value) 
});

// RadioGroup properties

export const checkedButtonProperty = new Property<RadioGroup | RadioButton, number | boolean>(
  {name: 'checkedButton'}
);

export const tintColorProperty = new InheritedCssProperty<Style, Color>({ 
  name: "tintColor", 
  cssName: "tint-color", 
  equalityComparer: Color.equals, 
  defaultValue: new Color("blue"),
  valueConverter: (value) => new Color(value) 
});

// RadioGroup definition

export class RadioGroup extends StackLayout implements RadioGroupInterface {
  nativeViewProtected: android.widget.RadioGroup;

  public static selectedEvent = 'selected';

  private _android: any; /// android.widget.RadioGroup
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

  [colorProperty.getDefault](): Color {
    return undefined;
  }

  [colorProperty.setNative](value: Color) {
      if (value instanceof Color) {
          this._android.setTextColor(value.android);
      } else {
          this._android.setTextColor(value);
      }
  }

  get tintColor(): Color {
      return this.style.tintColor;
  }
  set tintColor(value: Color) {
      this.style.tintColor = value;
  }

  [tintColorProperty.getDefault](): Color {
    return new Color("blue");
  }
  [tintColorProperty.setNative](value: Color) {
    if (value instanceof Color) {
      setTintColor(this._android, value.android);
    } else {
      setTintColor(this._android, value as number);
    }
  }

  public createNativeView() {
    initializeButtonCheckedChangeListener();

    const toDp = (dip) => layout.toDevicePixels(parseInt(dip));

    this._android = new android.widget.RadioButton(this._context, null);

    if (this.checkPaddingLeft) {
      this._android.setPadding(toDp(this.checkPaddingLeft), this._android.getPaddingTop(), this._android.getPaddingRight(), this._android.getPaddingBottom());
    }

    if (this.checkPaddingTop) {
      this._android.setPadding(this._android.getPaddingLeft(), toDp(this.checkPaddingTop), this._android.getPaddingRight(), this._android.getPaddingBottom());
    }

    if (this.checkPaddingRight) {
      this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), toDp(this.checkPaddingRight), this._android.getPaddingBottom());
    }

    if (this.checkPaddingBottom) {
      this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), this._android.getPaddingRight(), toDp(this.checkPaddingBottom));
    }

    if (this.checkPadding) {
      let pads = this.checkPadding.toString().split(',');
      switch (pads.length) {
        case 1:
          this._android.setPadding(toDp(pads[0]), toDp(pads[0]), toDp(pads[0]), toDp(pads[0]));
          break;
        case 2:
          this._android.setPadding(toDp(pads[0]), toDp(pads[1]), toDp(pads[0]), toDp(pads[1]));
          break;
        case 3:
          this._android.setPadding(toDp(pads[0]), toDp(pads[1]), toDp(pads[2]), toDp(pads[1]));
          break;
        case 4:
          this._android.setPadding(toDp(pads[0]), toDp(pads[1]), toDp(pads[2]), toDp(pads[3]));
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
tintColorProperty.register(Style);
colorProperty.register(Style);

const setTintColor = function(button /* android.widget.RadioButton  */, color: number /* @ColorInt */) : void {
  /**
   * Nativescript doesnot convert 2d javascript arrays to int[][]
   * https://github.com/NativeScript/android-runtime/issues/1089
   */
  const states = Array.create("[I", 3);

  //Not enabled
  const state1 = Array.create("int", 1);
  state1[0] = new java.lang.Integer(-android.R.attr.state_enabled);

  //Enabled, not checked.
  const state2 = Array.create("int", 2);
  state2[0] = new java.lang.Integer(android.R.attr.state_enabled);
  state2[1] = new java.lang.Integer(-android.R.attr.state_checked);

  //Enabled and checked.
  const state3 = Array.create("int", 2);
  state3[0] = new java.lang.Integer(android.R.attr.state_enabled);
  state3[1] = new java.lang.Integer(android.R.attr.state_checked);

  states[0] = state1;
  states[1] = state2;
  states[2] = state3;

  //Array of colors
  const colors = Array.create("int", 3);
  colors[0] = new Color("#dddddd").android;
  colors[1] = new Color("#aaaaaa").android,
  colors[2] = color;
  const sl /* android.content.res.ColorStateList */ = new android.content.res.ColorStateList(
    states, 
    colors
  );
  if (android.os.Build.VERSION.SDK_INT >= 21 /*android.os.Build.VERSION_CODES.LOLLIPOP*/) {
      button.setButtonTintList(sl);
  } else {
     let drawable /* android.graphics.drawable.Drawable */= android.support.v4.content.ContextCompat.getDrawable(button.getContext(), (android.support.design as any).R.drawable.abc_btn_radio_material);
     drawable = android.support.v4.graphics.drawable.DrawableCompat.wrap(drawable.mutate());
     android.support.v4.graphics.drawable.DrawableCompat.setTintMode(drawable, android.graphics.PorterDuff.Mode.SRC_IN);
     android.support.v4.graphics.drawable.DrawableCompat.setTintList(drawable, sl);
     button.setButtonDrawable(drawable);
  }
}