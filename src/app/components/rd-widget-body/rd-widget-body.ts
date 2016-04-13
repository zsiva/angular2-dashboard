import {Component} from 'angular2/core';

import {RdLoading} from '../rd-loading/rd-loading';
import {NgIf} from 'angular2/common';

@Component({
  selector: 'rd-widget-body',
  properties: ['loading', 'classes'],
  directives: [RdLoading, NgIf],
  templateUrl: 'app/components/rd-widget-body/rd-widget-body.html'
})

export class RdWidgetBody {
  loading:boolean;
  classes:string;

  constructor() {
    this.loading = false;
    this.classes = '';
  }
}
