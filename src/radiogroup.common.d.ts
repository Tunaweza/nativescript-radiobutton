import { EventData } from "tns-core-modules/data/observable";
export interface SelectedEventData extends EventData {
    object: any;
    checkId: number;
    value: string;
}
export interface RadioGroupInterface {
    checkedButton: number;
}
export interface RadioButtonInterface {
    text?: string;
    checked: boolean;
    enabled: boolean;
    toggle(): void;
}
