import {Component} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
    selector: 'authors',
    template: 
    `
    <h2>{{liste}}</h2>

    <ul>
        <li *ngFor="let author of authors">
        {{author}}
        </li>
    </ul>

    `
})

export class AuthorsComponent{
    liste = 'list of authors';
    authors;

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
    }
}


