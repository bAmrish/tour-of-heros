import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component ({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!!</h2>
        <div> <label for="id">id: </label> {{hero.id}}</div>
        <div>
            <label for="name">name</label>
            <div>
                <input type="text" [(ngModel)]=hero.name placehodler="name"/>
            </div>
        </div>
    `
})
export class AppComponent {
    public title = 'Tour of Heros'
    public hero: Hero = {
        id: 1,
        name: 'Windstrom'
    }
}