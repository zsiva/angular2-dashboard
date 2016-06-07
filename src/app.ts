import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';

import {SeedApp} from './app/seed-app';


bootstrap(SeedApp, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
])
.catch(err => console.error(err));
