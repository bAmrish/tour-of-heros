import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HeroService} from './hero.service';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

@RouteConfig([
    {
        name: 'Heroes',
        path: '/heroes',
        component: HeroesComponent   
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        name: 'HeroDetail',
        path: '/detail/:id',
        component: HeroDetailComponent
    }
])
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a href="#" [routerLink]="['Heroes']">Heroes</a>
        <a href="#" [routerLink]="['Dashboard']">Dashboard</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})
export class AppComponent {
    public title = 'Tour of Heros!!!!!';
}