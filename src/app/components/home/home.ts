import {Component} from 'angular2/core';

import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {CollectionList} from '../collection/collection-list';
import {JumperListService} from '../../services/jumper_list';

@Component({
  selector: 'home',
  providers: [JumperListService],
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList]
})
export class Home {

  constructor(public jumpersService: JumperListService) {}

  ngOnInit() {

  }

}
