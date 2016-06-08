import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import {FlagsListService} from './flags.service';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {CollectionList} from '../collection/collection-list';

import {FlagModel} from './flag.model';
import {SearchNamePipe} from '../shared/search.pipe';

@Component({
  selector: 'flags',
  providers: [FlagsListService],
  pipes: [SearchNamePipe],
  directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList, NgFor],
  templateUrl: 'app/components/flags/flags.component.html',
  styleUrls: ['app/components/flags/flags.component.css']

})
export class Flags {
  flags:FlagModel[];
  header:string[] = ['Flag', 'Name', 'Capital'];
  @Input() flagName:string = '';


  constructor(public flagsService: FlagsListService) {
     this.flags = flagsService.all();
  }
}
