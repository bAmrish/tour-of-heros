import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service'

@Component({
    selector: 'my-dashboard',
    template: `
        <h1>Dashboard!</h1>
        <div *ngFor="#hero of heroes" onClick="goToDetail(hero)" class="col-1-4">
               <div class="module hero">
                   <h4>{{hero.name}}</h4>
               </div>
        </div>
    `
})

export class DashboardComponent implements OnInit {
    public heroes : Hero[] = [];

    constructor(public _heroService: HeroService){}

    getHeroes(){
        this._heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(){
        this.getHeroes();
    }

    goToDetail(hero){

    }
}