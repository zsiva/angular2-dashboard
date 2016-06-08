import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

import {FlagsListService} from '../flags.service';
import {RdWidgetBody} from '../../rd-widget-body/rd-widget-body';
import {RdWidget} from '../../rd-widget/rd-widget';
import {RdWidgetHeader} from '../../rd-widget-header/rd-widget-header';

import {FlagModel} from '../flag.model';

@Component({
    selector: 'flag-edit',
    templateUrl: 'app/components/flags/edit/flag.edit.component.html',
    directives: [RdWidgetBody, RdWidget, RdWidgetHeader],
    providers: [FlagsListService],
    styleUrls: [],
    pipes: []
})

export class FlagEditComponent implements OnInit, OnDestroy {
    flag:FlagModel;

    constructor(public flagsService: FlagsListService) {
        this.flag = new FlagModel(flagsService.get());
    }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
