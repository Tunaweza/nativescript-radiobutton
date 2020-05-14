# NativeScript-RadioButton

This is a fork of [other](https://www.npmjs.com/package/nativescript-radiobutton) NativeScript plugin for the native radiogroup and radiobutton widget.

## Changes from the original plugin

* Support for `tintColor` xml property ( or `tint-color` css property).
* Make `color` xml (and css property) work correctly.

#### Platform controls used:
Android |   iOS
---------- | -------
[Android RadioGroup](https://developer.android.com/reference/android/widget/RadioGroup.html) | NONE
[Android RadioButton](https://developer.android.com/reference/android/widget/RadioButton.html) | NONE

## Installation
From your command prompt/terminal go to your app's root folder and execute:

`tns plugin add @webileapps/nativescript-radiobutton`

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
import { RadioButtonModule } from '@webileapps/nativescript-radiobutton/angular'

@NgModule({
    imports: [
        RadioButtonModule
    ]
})

```

Place this in your view.

```xml
<StackLayout>
    <RadioGroup (selected)="onSelected($event)">
        <RadioButton text="Selection 1"></RadioButton>
        <RadioButton text="Selection 2"></RadioButton>
        <RadioButton text="Selection 3"></RadioButton>
    </RadioGroup>
</StackLayout>
```

```typescript
export class MainComponent {

    onSelected($event : SelectedEventData) : void {
        // This will be the text of the radio button selected.
        console.log($event.value);
        // Selection 1
    }
}
```

### NativeScript-Vue

In your `main.js` register both `RadioGroup` and `RadioButton` elements

```js
Vue.registerElement('RadioGroup', () => require('@webileapps/nativescript-radiobutton').RadioGroup)
Vue.registerElement('RadioButton', () => require('@webileapps/nativescript-radiobutton').RadioButton)
```

And in your template, use it

```xml
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

### RadioButton
Android | Example
---------- | ----------
enabled | enabled="true \| false"
text | text="a string"
checked | checked="true \| false"

### RadioGroup
Android | Returns
---------- | ----------
value | the index of the radio button selected

## Supported Events

### RadioGroup
Android | Type
---------- | ----------
value | EventEmitter<number>

