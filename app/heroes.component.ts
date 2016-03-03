import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroesList} from './heroes-list.component';

@RouteConfig([
    {
        name: 'HeroesList',
        path: '/',
        component: HeroesList,
        useAsDefault: true
    },
    {
        name: 'HeroDetails',
        path: '/details/:id',
        component: HeroDetailComponent        
    }
])
@Component ({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent, ROUTER_DIRECTIVES]
})
export class HeroesComponent implements OnInit{
    public selectedHero: Hero;
    public heroes;

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) {}

    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        let link = ['HeroDetails', { id: this.selectedHero.id }];
        this._router.navigate(link);

    }

    getDetails() {
        let link = ['HeroDetails', {id: this.selectedHero.id}];
        this._router.navigate(link);
    }
}