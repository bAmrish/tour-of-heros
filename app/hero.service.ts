import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heros';

@Injectable() 
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(){
        return new Promise( resolve => setTimeout(()=> resolve(HEROES), 2000));
    }

    getHero(id: number) {
        return Promise
                .resolve(HEROES)
                .then( heroes => 
                    heroes.filter(hero => hero.id === id)[0]
                )
                
    }
}