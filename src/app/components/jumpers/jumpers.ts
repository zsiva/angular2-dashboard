import {Component} from 'angular2/core';

import {JumperListService} from '../../services/jumper_list';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';

@Component({
  selector: 'jumpers',
  providers: [JumperListService],
  directives: [RdWidgetBody, RdWidget],
  templateUrl: 'app/components/jumpers/jumpers.html'
})
export class Jumpers {
  jumpers:any[];

  constructor(public jumpersService: JumperListService) {
    /* TODO: get items from collection service */
  }
}
