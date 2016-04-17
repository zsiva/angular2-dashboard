import {Component} from 'angular2/core';

import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [RdWidgetBody, RdWidget, RdWidgetHeader],
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

}
