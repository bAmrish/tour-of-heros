import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heros';

@Injectable() 
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
}