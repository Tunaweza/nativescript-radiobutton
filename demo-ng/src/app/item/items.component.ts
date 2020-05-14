import { Component } from "@angular/core";
import { SelectedEventData } from "@webileapps/nativescript-radiobutton/radiogroup.common";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    onChanged($event : SelectedEventData) : void {
        console.log($event.value);
    }
}