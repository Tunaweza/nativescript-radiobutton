# NativeScript-RadioButton
[![npm](https://img.shields.io/npm/v/nativescript-radiobutton.svg)](https://www.npmjs.com/package/nativescript-radiobutton)
[![npm](https://img.shields.io/npm/dt/nativescript-radiobutton.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-radiobutton)

A NativeScript plugin for the native radiogroup and radiobutton widget.

#### Platform controls used:
Android |   iOS
---------- | -------
[Android RadioGroup](https://developer.android.com/reference/android/widget/RadioGroup.html) | NONE
[Android RadioButton](https://developer.android.com/reference/android/widget/RadioButton.html) | NONE

## Installation
From your command prompt/terminal go to your app's root folder and execute:

`tns plugin add nativescript-radiobutton`



## Useage

### Angular

Place this at the top of your component.

```typescript
import { registerElement } from "nativescript-angular/element-registry";
import { RadioGroup, RadioButton } from 'nativescript-radiobutton';
registerElement("RadioGroup", () => require("nativescript-radiobutton").RadioGroup);
registerElement("RadioButton", () => require("nativescript-radiobutton").RadioButton );

```

Place this in your view.

```html
<StackLayout>
    <RadioGroup>
        <RadioButton text="Selection 1"></RadioButton>
        <RadioButton text="Selection 2"></RadioButton>
        <RadioButton text="Selection 3"></RadioButton>
    </RadioGroup>
</StackLayout>
```


## Supported Properties


Android | Example
---------- | ----------
enabled | enabled="true \| false"
text | text="a string"
checked | checked="true \| false"