import {Injectable} from 'angular2/core';
import {HEROS} from './mock-heros';

@Injectable() 
export class HeroService {
    getHeroes() {
        return HEROS;
    }
}