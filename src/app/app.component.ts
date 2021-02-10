import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: '<h1>{{title}}</h1>', // inline templating, a possible way but not recommended
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
