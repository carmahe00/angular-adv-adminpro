import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';

//Evitamos el warning de typescript
declare function customInitFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService) { }

  /**
   *@name customInitFunction es una función global, especificada en assets/js/cutom.js 
   */
  ngOnInit(): void {
    customInitFunction();
  }

}
