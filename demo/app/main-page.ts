import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { SelectedEventData } from 'nativescript-radiobutton';
import { HelloWorldModel } from './main-view-model';

const viewModel = new HelloWorldModel();

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = viewModel;
}

export function onChanged (args: SelectedEventData): void {
  console.log(`onChanged called. Selected: ${args}`);
  if(args.object.bindingContext) {
    args.object.bindingContext.set('selectedOption', args.value);
  }
}

