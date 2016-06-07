import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {CollectionList} from '../collection/collection-list';
import {JumperListService} from '../../services/jumper_list';
import {FlagsListService} from '../flags/flags.service';

@Component({
    selector: 'home',
    providers: [JumperListService, FlagsListService],
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['app/components/home/home.css'],
    directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList, ROUTER_DIRECTIVES]
})

export class Home {
    jumpers: any[];
    jumpersHeader:any[];
    flags:any[];
    flagsHeader:any[];

    constructor(public jumpersService: JumperListService, public flagsService: FlagsListService) {
        this.jumpers = jumpersService.all().map((jumper) => {
            return { name: jumper.name, points: jumper.points, likes: jumper.likes, countries: jumper.countries.length }
        });
        this.jumpersHeader = ['Name', 'Points', 'Likes', 'Countries'];

        this.flags = flagsService.all();
        this.flagsHeader = Object.keys(this.flags[0]);
    }

    ngOnInit() {

    }

}
