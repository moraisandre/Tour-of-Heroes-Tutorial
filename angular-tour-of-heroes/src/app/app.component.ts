import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() {}

  ngOnInit() {}
}
