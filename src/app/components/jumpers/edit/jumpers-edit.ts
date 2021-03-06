import { Component } from '@angular/core';
import { RouteSegment } from '@angular/router';

import {IconInputComponent} from '../../inputs/icon-input';
import {MultiSelectBoxComponent} from '../../inputs/multi-select-box';
import {JumperListService} from './../jumper.service';
import {RdWidgetBody} from '../../rd-widget-body/rd-widget-body';
import {RdWidget} from '../../rd-widget/rd-widget';
import {RdWidgetHeader} from '../../rd-widget-header/rd-widget-header';

@Component({
  selector: 'edit-jumper',
  templateUrl: 'app/components/jumpers/edit/jumpers-edit.html',
  directives: [IconInputComponent, MultiSelectBoxComponent, RdWidgetBody, RdWidget, RdWidgetHeader],
  providers: [JumperListService]
})
export class EditJumperComponent {
    countries:any = ['Spain', 'France', 'Germany'];
    jumper:any = [];
    enabled: boolean = false;

    constructor(public jumpersService: JumperListService, private curr: RouteSegment) {
        this.jumper = jumpersService.get(curr.getParam('name'));
    }

    enableEditor() {
        this.enabled = !this.enabled;
    }

    updateJumper() {
        this.updatePoints();
        this.jumpersService.update(this.jumper);
    }


    updatePoints() {
        this.jumper.points = this.jumper.likes + (this.jumper.jumps * 3);
    }
}
