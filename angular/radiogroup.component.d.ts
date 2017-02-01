import { ElementRef, AfterViewInit, EventEmitter, OnChanges, SimpleChanges, ApplicationRef } from "@angular/core";
export declare class RadioGroupComponent implements AfterViewInit, OnChanges {
    private _element;
    private _applicationRef;
    value: number;
    valueChange: EventEmitter<number>;
    private radioButtons;
    constructor(_element: ElementRef, _applicationRef: ApplicationRef);
    ngAfterViewInit(): void;
    getNewSelectedBox(): void;
    setBoxToSelected(index: number): void;
    ngOnChanges(changes: SimpleChanges): void;
}
