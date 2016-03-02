import {Component} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';

var HEROS: Hero[] = [
    {id: 1, name: 'Mogambo'},
    {id: 2, name: 'Shakal'},
    {id: 3, name: 'Gabbar'},
    {id: 4, name: 'Lion'},
    {id: 5, name: 'Ravan'},
    {id: 6, name: 'Kans'},
    {id: 7, name: 'Gogo'},
    {id: 8, name: 'Teja'},
    {id: 9, name: 'Robert'},
    {id: 10, name: 'Bhalla'}
]

@Component ({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <ul class="heroes">
            <li *ngFor="#hero of heros" (click)="onSelect(hero)"
                [class.selected]="selectedHero===hero">
                <span class="badge">{{hero.id}}</span>
                {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    directives: [HeroDetailComponent]
})
export class AppComponent {
    public title = 'Tour of Heros';
    public selectedHero: Hero;
    public heros = HEROS;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}