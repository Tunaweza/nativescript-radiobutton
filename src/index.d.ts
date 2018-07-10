import { Property, View } from 'tns-core-modules/ui/core/view';

export interface SelectedEventData extends EventData {
  object: any;
  checkId: number;
  value: string;
}

/**
 * Represents a RadioGroup component.
 */
export declare class RadioGroup extends View {
    public static selectedEvent = 'selected';

    /**
     * Gets the native [android widget](https://developer.android.com/reference/android/widget/RadioGroup.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* android.widget.RadioGroup */;

    /**
     * Gets the ios Label
     */
    ios: any /* Label */;

    /**
     * The id of the child radio button that should be checked by default within this radio group.
     */
    checkedButton: number;

    public on(event: "selected", callback: (args: SelectedEventData) => void, thisArg?: any);
}

export const checkedProperty: Property<Switch, boolean>;

export interface RadioGroupInterface {
    checkedButton: number;
    fillColor: string;
    tintColor: string;
}

export declare class RadioButton extends View {

    /**
     * Gets the native [android widget](https://developer.android.com/reference/android/widget/RadioButton.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* android.widget.RadioButton*/;

    /**
     * Gets the ios Label
     */
    ios: any /* Label */;

    /**
     * Gets or sets if a switch is checked or not.
     */
    checked: boolean;

    /**
     * Change the checked state of the view to the inverse of its current state.
     */
    toggle(): void;

}

export interface RadioButtonInterface {
    text?: string;
    checked: boolean;
    enabled: boolean;
    fillColor: string;
    tintColor: string;
    toggle(): void;

}