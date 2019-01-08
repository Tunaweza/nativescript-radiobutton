import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { SelectedEventData } from '@webileapps/nativescript-radiobutton';
import { HelloWorldModel } from './main-view-model';

const viewModel = new HelloWorldModel();

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = viewModel;
}

export function onChanged (args: SelectedEventData): void {
  console.log(`onChanged called. Selected: ${args.value}`);
  if(args.object.bindingContext) {
    args.object.bindingContext.set('selectedOption', args.value);
    args.object.bindingContext.set('color', 'blue');
  }
}

export function onLabelLoaded(args : observable.EventData) {
  let radioButton : any = args.object;
  const llp = radioButton.android.getLayoutParams();
  llp.weight = 1;
  radioButton.android.setLayoutParams(llp);
  // console.log(llp.weight);
}

