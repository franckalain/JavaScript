import {Component} from '@angular/core';
//import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <button [style.backgroundColor] = "isActive ? 'blue' : 'white' ">Save</button>
    `
})

export class CoursesComponent{
    isActive = true;
}