import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';

import {HeroService} from './hero.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public heroes : Hero[] = [];

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ){}

    getHeroes(){
        this._heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(){
        this.getHeroes();
    }

    goToDetail(hero: Hero){
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);
    }
}