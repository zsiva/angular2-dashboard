import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

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
    directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList, ROUTER_DIRECTIVES]
})

export class Home {
    jumpers: any[];

    constructor(public jumpersService: JumperListService) {
        this.jumpers = jumpersService.all().map((jumper) => {
            return { name: jumper.name, points: jumper.points, likes: jumper.likes, countries: jumper.countries.length }
        });
    }

    ngOnInit() {

    }

}
