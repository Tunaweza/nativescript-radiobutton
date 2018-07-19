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



## Usage

### Demo App

If you want a quickstart, clone the repo, `cd src`, and execute the following commands:

```bash
npm install
npm run demo.android
```

### Angular

Import to NgModule for use

```typescript
import { RadioButtonModule } from 'nativescript-radiobutton/angular'

@NgModule({
    imports: [
        RadioButtonModule
    ]
})

```

Place this in your view.

```html
<StackLayout>
    <RadioGroup [(value)]="dataBoundVariable">
        <RadioButton text="Selection 1"></RadioButton>
        <RadioButton text="Selection 2"></RadioButton>
        <RadioButton text="Selection 3"></RadioButton>
    </RadioGroup>
</StackLayout>
```

### NativeScript-Vue

In your `main.js` register both `RadioGroup` and `RadioButton` elements

```js
Vue.registerElement('RadioGroup', () => require('nativescript-radiobutton').RadioGroup)
Vue.registerElement('RadioButton', () => require('nativescript-radiobutton').RadioButton)
```

And in your template, use it

```html
<RadioGroup
  @selected="onSelected">
  <RadioButton
    v-for="item in someList"
    :key="item.id"
    :text="item.text">
  </RadioButton>
</RadioGroup>
```


## Supported Properties

###RadioButton
Android | Example
---------- | ----------
enabled | enabled="true \| false"
text | text="a string"
checked | checked="true \| false"

###RadioGroup
Android | Returns
---------- | ----------
value | the index of the radio button selected

## Supported Events

###RadioButton
Android | Example
---------- | ----------
enabled | enabled="true \| false"
text | text="a string"
checked | checked="true \| false"

###RadioGroup
Android | Type
---------- | ----------
value | EventEmitter<number>

