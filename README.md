# NativeScript-RadioButton

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

```component

import { registerElement } from "nativescript-angular/element-registry";
import { CheckBox } from 'nativescript-checkbox';
registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
import { RadioGroup, RadioButton } from 'nativescript-radiobutton';
registerElement("RadioGroup", () => require("nativescript-radiobutton").RadioGroup);
registerElement("RadioButton", () => require("nativescript-radiobutton").RadioButton );

```


```html
<StackLayout>
    <RadioGroup>
        <RadioButton text="Selection 1"></RadioButton>
        <RadioButton text="Selection 2"></RadioButton>
        <RadioButton text="Selection 3"></RadioButton>
    </RadioGroup>
</StackLayout>
```

