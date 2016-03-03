import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {RouteParams} from 'angular2/router';

@Component ({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    public hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routerParams: RouteParams
    ) {}

    ngOnInit() {
        let id = +this._routerParams.get('id');
        this._heroService
            .getHero(id)
            .then(hero => this.hero = hero);    
    }

    goBack() {
        window.history.back();
    }

}

