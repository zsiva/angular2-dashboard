import {Component, Input} from 'angular2/core';

@Component({
    selector: 'icon-input',
    template:`<div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw {{iconclass}}"></i></span>
                <input type="text" class="form-control" placeholder="{{placeholder}}" value="{{value}}">
                <span class="input-group-addon hidden-xs">{{placeholder}}</span>
              </div><br>`
})
export class IconInputComponent{
    @Input() iconclass: string;
    @Input() value: string;
    @Input() placeholder: string;
  constructor() {

  }
}
