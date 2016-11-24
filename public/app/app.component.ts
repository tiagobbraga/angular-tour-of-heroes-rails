import { Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
              <h1>{{title}}</h1>
              <nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
              </nav>
              <router-outlet></router-outlet>
          `,
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init();

    console.log('logged '+this._tokenService.userSignedIn());
  }
}
