import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {Jumpers} from './components/jumpers/jumpers';
import {EditJumperComponent} from './components/jumpers/edit/jumpers-edit';
import {Flags} from './components/flags/list';

@Component({
    selector: 'seed-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/seed-app.html',
    styleUrls: ['app/styles/app.css']
})
@RouteConfig([
    { path: '/home', component: Home, name: 'Home', useAsDefault: true },
    { path: '/jumpers', component: Jumpers, as: 'Jumpers' },
    { path: '/jumper-edit', component: EditJumperComponent, as: 'JumperEdit' },
    { path: '/flags', component: Flags, as: 'Flags' },
])
export class SeedApp {
    mobileView: number = 992;
    toggle: boolean = false;
    constructor() {
        this.attachEvents();
    }

    attachEvents() {
        window.onresize = () => {
            if (this.getWidth() >= this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    this.toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }
        }
    }

    getWidth() {
        return window.innerWidth;
    }
    toggleSidebar() {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    }

}
