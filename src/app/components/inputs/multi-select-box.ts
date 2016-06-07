import { Component, Input } from '@angular/core';

@Component({
    selector: 'multi-select-box',
    template:`<select class="selectpicker {{iconclass}}" multiple>
                <option *ngFor="#item of items;">{{item}}</option>
                </select>
                `
})
export class MultiSelectBoxComponent{
    @Input() iconclass: string;
    @Input() items: any[];
  constructor() {

  }
}
