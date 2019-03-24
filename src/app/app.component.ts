import { Component } from '@angular/core';
import { FormationComponent } from './formation/formation.component';

import * as $ from 'jquery';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Clean(): void
  {
    $("app-home").hide();
    $("app-formation").hide();
    $("app-projets").hide();
    $("app-contact").hide();
    $("app-cv").hide();
  }

  Home(): void
  {
    this.Clean();
    $("app-home").show();
  }

  Formation(): void
  {
    this.Clean();
    $("app-formation").show();
  }

  Projets(): void
  {
    this.Clean();
    $("app-projets").show();
  }

  Contact(): void
  {
    this.Clean();
    $("app-contact").show();
  }

  CV(): void
  {
    this.Clean();
    $("app-cv").show();
  }

  ngOnInit()
  {
    this.Home();
  }

}