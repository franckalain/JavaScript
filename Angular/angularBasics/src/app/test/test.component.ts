import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
          
          <!--style binding-->
          <h2 [style.color]="hasError ? 'red' : 'green'">style binding</h2>
          <h2 [style.color]="highLightColor">style binding 2</h2>
          <h2 [ngStyle]="titleStyles">style binding 3</h2>

          <!--event binding-->
          <button (click)="onClick()">Great</button>
          {{greeting}}
          <button (click)="greeting='bonjour'">Great2</button>

          <!--template reference variables-->
          <input #myInput type="text">
          <button (click)="logMessage(myInput.value)">Log</button>
          <!--two way binding-->
          <input [(ngModel)]="nom" type="text">
          {{nom}}

          <!--ngIf Directive-->
          <h2 *ngIf="displayName; else elseBlock">Bienvenue</h2>
          <ng-template #elseBlock>
            <h2>
              name is hidden
            </h2>
          </ng-template>

          <div *ngIf="displayNom; then thenBlock; else elseBlock"></div>
          <ng-template #thenBlock>
            <h2>display nom</h2>
          </ng-template>

          <ng-template #elseBlock>
            <h2>hidden nom</h2>
          </ng-template>

          <!--ngSwitch-->
          <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">you picked red color</div>
            <div *ngSwitchCase="'blue'">you picked blue color</div>
            <div *ngSwitchCase="'green'">you picked green color</div>
            <div *ngSwitchDefault="'red'">picked again</div>
          </div>

          <!--ngFor-->
          <div *ngFor="let color of colors; index as i"><h2>{{i}} {{color}}</h2></div>
          
          <!--component interaction-->
          <h2>{{"hello " + myName}}</h2>

          <button (click)="fireEvent()">Send Event</button>
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
  hasError = false;
  isSpecial = true;
  messageClasses = {
    'text-success': !this.hasError,
    'text-danger': !this.hasError,
    'text-special': this.isSpecial
  }
  // style binding
  highLightColor = "orange";
  titleStyles = {
    color: 'blue',
    fontStyles: 'italic'
  }

  // event binding
  greeting = "";
  onClick(){
    console.log("welcome");
    this.greeting = "welcome franck";
  }

  //template reference varriale
  logMessage(value){
    console.log(value);
  }

  // two way binding
  nom = "";

  // ngIf directive
  displayName = false;

  displayNom = true;

  // ngSwitch
  color = "orange";

  //ngFor 
  colors = ["red", "blue", "green", "yellow"];

  // component interaction: regarder dans app.component pour voir la propriete

  @Input('parentData') myName;

  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
    bonjour(){
      return "Bonjour Mr. " + this.name;
    }

    fireEvent(){
      this.childEvent.emit('hey');
    }
}
