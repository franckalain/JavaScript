import {Component} from '@angular/core';
//import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <h2 [textContent] = "title"></h2>
    <img [src] = "imageUrl">
    <img src="{{imageUrl}}">
    `
})

export class CoursesComponent{
    title = 'List of Courses';
    imageUrl = "http://lorempixel.com/400/200";
}