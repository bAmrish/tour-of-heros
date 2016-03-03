import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from 'angular2/router';

@Component ({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
    public selectedHero: Hero;
    public heroes;

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) {}

    ngOnInit() {
        // this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getDetails() {
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this._router.navigate(link);
    }
}