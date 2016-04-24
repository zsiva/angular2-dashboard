import {Component, Input} from 'angular2/core';

@Component({
    selector: 'edit-input',
    template:`<div class="input-group">
                <span class="input-group-addon"><i class="fa {{iconclass}}"></i></span>
                    <input type="text" class="form-control" placeholder="{{placeholder}}">
              </div>`
})
export class EditInputComponent{
    @Input() iconclass: string[];
    @Input() placeholder: string;
  constructor() {

  }
}
