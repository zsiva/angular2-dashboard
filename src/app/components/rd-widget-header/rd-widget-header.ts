import {Component, Input} from 'angular2/core';

@Component({
  selector: 'rd-widget-header',
  inputs: ['title', 'icon'],
  templateUrl: 'app/components/rd-widget-header/rd-widget-header.html',
})
export class RdWidgetHeader {
  constructor() {
  }
}
