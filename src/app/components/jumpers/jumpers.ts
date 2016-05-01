import {Component} from 'angular2/core';

import {JumperListService} from '../../services/jumper_list';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {CollectionList} from '../collection/collection-list';

@Component({
  selector: 'jumpers',
  providers: [JumperListService],
  directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList],
  templateUrl: 'app/components/jumpers/jumpers.html'
})
export class Jumpers {
  jumpers:any[];
  header:any[];

  constructor(public jumpersService: JumperListService) {
    this.jumpers = jumpersService.all().map((jumper) => {
        return { name: jumper.name, points: jumper.points, likes: jumper.likes, countries: jumper.countries.length }
     });

     this.header = Object.keys(this.jumpers[0]);
  }
}
