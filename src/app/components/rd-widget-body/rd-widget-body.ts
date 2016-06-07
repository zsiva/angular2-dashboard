import { Component, Input } from '@angular/core';

import {RdLoading} from '../rd-loading/rd-loading';
import { NgIf } from '@angular/common';

@Component({
  selector: 'rd-widget-body',
  directives: [RdLoading, NgIf],
  templateUrl: 'app/components/rd-widget-body/rd-widget-body.html'
})

export class RdWidgetBody {
  @Input() loading:boolean = false;
  @Input() classes:string;

  constructor() {
  }
}
