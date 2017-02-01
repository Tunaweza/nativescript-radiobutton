import {
    Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, Output, EventEmitter, Input, OnChanges,
    SimpleChanges, ApplicationRef
} from "@angular/core";
import { PropertyChangeData } from 'data/observable';
import { RadioButton } from '../';


@Component({
    selector: "RadioGroup",
    template: "<ng-content></ng-content>",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
    ]
})

export class RadioGroupComponent implements AfterViewInit , OnChanges {

    @Input()
    public value: number;

    @Output()
    public valueChange: EventEmitter<number> = new EventEmitter();


    private radioButtons: RadioButton[] = [];

    constructor(
        private _element: ElementRef,
        private _applicationRef: ApplicationRef
    ) {
    }

    ngAfterViewInit() {

        let i = 0;
        let max = this._element.nativeElement.getChildrenCount();

        while( i < max ) {
            if (typeof this._element.nativeElement.getChildAt(i).checked !== 'undefined') {
                this.radioButtons.push(this._element.nativeElement.getChildAt(i));
            }
            i++;
        }

        this._element.nativeElement.on('propertyChange', (res: PropertyChangeData) => {
            if (res.propertyName === 'checkedButton') {
                this.getNewSelectedBox();
            }
        });

    }

    getNewSelectedBox() {
        let i = 0;
        let max = this.radioButtons.length;

        while( i < max ) {
            if (this.radioButtons[i].checked === true) {
                this.valueChange.emit(i);
                this._applicationRef.tick();
            }
            i++;
        }
    }

    setBoxToSelected(index: number) {
        this.radioButtons[index].checked = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('value')) {
            if (typeof changes['value'].currentValue !== 'undefined') {
                this.setBoxToSelected(changes['value'].currentValue);
            }
        }
    }
}
