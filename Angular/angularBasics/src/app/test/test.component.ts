import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: 
          `<h2>Welcome {{name}}</h2>
          <h2>{{2 + 2}}</h2>
          <div class="rouge">{{"welcome " + name}}</div>
          {{name.length}}
          <div class="uper">{{name.toUpperCase()}}</div>  
          <div class="bonjour">{{bonjour()}}<div>
          {{siteUrl}}
          <input [id]="myId" type="text" value="Ange">
          <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Ange">
          
          <!--class binding-->
          <div [class]="successClass">Bonjour</div>
          <h2 [class.text-danger]="hasError">error</h2>
          <h2 [ngClass]="messageClasses">conditions sur les classes</h2>
          `,
  styles: 
  [
    `
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
    color: blue;
  }
  
  `]
})
export class TestComponent implements OnInit {
  name = 'Alain';
  siteUrl = window.location.href;
  myId = "id";
  isDisabled = false;
  // class binding
  successClass = "text-success";
  hasError = true;
  isSpecial = true;
  messageClasses = {
    'text-success': !this.hasError,
    'text-danger': !this.hasError,
    'text-special': this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }
    bonjour(){
      return "Bonjour Mr. " + this.name;
    }
}
