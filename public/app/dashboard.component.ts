import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Angular2TokenService, RegisterData } from 'angular2-token.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  private _registerData: RegisterData = <RegisterData>{};
  // @Input() private _output: any;

  constructor(private heroService: HeroService, private _tokenService: Angular2TokenService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
  // Submit Data to Backend
  onSubmit() {

      // this._output = null;

      console.log(this._registerData);
      this._tokenService.registerAccount(this._registerData).subscribe(
          res => {
              this._registerData  = <RegisterData>{};
              console.log('SUCCESS :: '+res);
              // this._output        = res;
          }, error => {
              this._registerData  = <RegisterData>{};
              console.log('ERROR :: '+error);
              // this._output        = error;
          }
      );
  }
}
