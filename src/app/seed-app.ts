import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {Home} from './components/home/home';
import {Jumpers} from './components/jumpers/jumpers';
import {EditJumperComponent} from './components/jumpers/edit/jumpers-edit';
import {Flags} from './components/flags/flags.component';

@Component({
    selector: 'seed-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/seed-app.html',
    styleUrls: ['app/styles/app.css']
})
@Routes([
    { path: '/home', component: Home },
    { path: '/jumpers', component: Jumpers },
    { path: '/jumper-edit', component: EditJumperComponent },
    { path: '/flags', component: Flags}
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
