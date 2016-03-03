import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {RouteParams} from 'angular2/router';

@Component ({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">    
            <h2>{{hero.name}} details!!</h2>
            <div> <label for="id">id: </label> {{hero.id}}</div>
            <div>
                <label for="name">name</label>
                <div>
                    <input type="text" [(ngModel)]=hero.name placehodler="name"/>
                </div>
            </div>
        </div>
        <div><a href="#" (click)="goBack()">Go Back</a></div>
    `
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

