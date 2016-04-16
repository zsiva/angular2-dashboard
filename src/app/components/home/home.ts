import {Component} from 'angular2/core';

import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [RdWidgetBody, RdWidget],
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

}
