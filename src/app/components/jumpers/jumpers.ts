import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {JumperListService} from './jumper.service';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {CollectionList} from '../collection/collection-list';
import {SearchNamePipe} from '../shared/search.pipe';

@Component({
  selector: 'jumpers',
  pipes: [SearchNamePipe],
  providers: [JumperListService],
  directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList, ROUTER_DIRECTIVES],
  templateUrl: 'app/components/jumpers/jumpers.html'
})
export class Jumpers {
  jumpers:any[];
  header:any[];
  jumperName:string = '';

  constructor(public jumpersService: JumperListService) {
    this.jumpers = jumpersService.all().map((jumper) => {
        return { name: jumper.name, points: jumper.points, likes: jumper.likes, countries: jumper.countries.length }
     });

     this.header = Object.keys(this.jumpers[0]);
  }
}
