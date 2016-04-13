import {Component, View} from 'angular2/angular2';
@Component({
    selector: 'edit-input',
    properties: ['iconclass', 'placeholder']
})
@View({
    template:`<div class="input-group">
        <div class="input-group-addon">
            <i class="fa {{iconclass}}"></i></div>
            <input type="text" class="form-control" [placeholder]="placeholder">
        </div>
    </div>`
})
export class EditInputComponent{
    iconclass: string[];
    placeholder: string;
  constructor() {

  }
}
