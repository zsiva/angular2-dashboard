import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { RouteSegment } from '@angular/router';

import {FlagsListService} from '../flags.service';
import {RdWidgetBody} from '../../rd-widget-body/rd-widget-body';
import {RdWidget} from '../../rd-widget/rd-widget';
import {RdWidgetHeader} from '../../rd-widget-header/rd-widget-header';
import {IconInputComponent} from '../../inputs/icon-input';

import {FlagModel} from '../flag.model';

@Component({
    selector: 'flag-edit',
    templateUrl: 'app/components/flags/edit/flag.edit.component.html',
    directives: [RdWidgetBody, RdWidget, RdWidgetHeader, IconInputComponent],
    providers: [FlagsListService],
    styleUrls: [],
    pipes: []
})

export class FlagEditComponent{
    flag:FlagModel;
    enabled: boolean = false;

    constructor(public flagsService: FlagsListService, private curr: RouteSegment) {
        this.flag = new FlagModel(flagsService.get(curr.getParam('name')));
    }

    enableEditor():void {
        this.enabled = !this.enabled;
    }

    updateFlag() {

    }

}
