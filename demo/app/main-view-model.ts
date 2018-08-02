import { Observable } from 'tns-core-modules/data/observable';
import * as dialogs from 'tns-core-modules/ui/dialogs';

declare var android: any;

export class HelloWorldModel extends Observable {
  public selectedOption: string;
  public color: string = 'red';
}
