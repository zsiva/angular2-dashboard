import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {FlagsListService} from './flags.service';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {CollectionList} from '../collection/collection-list';

import {Flag} from './flag.model';

@Component({
  selector: 'flags',
  providers: [FlagsListService],
  directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList, NgFor],
  templateUrl: 'app/components/flags/flags.component.html',
  styleUrls: ['app/components/flags/flags.component.css']

})
export class Flags {
  flags:Flag[];
  header:string[] = ['Flag', 'Name', 'Capital'];


  constructor(public flagsService: FlagsListService) {
     this.flags = flagsService.all();
  }
}
