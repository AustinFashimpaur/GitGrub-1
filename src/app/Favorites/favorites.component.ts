import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';
import {moveIn, fallIn, moveInLeft} from '../router.animations';


@Component({
  selector: 'app-members',
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class FavoritesComponent implements OnInit {
  name: any;
  state: string = '';

  recipes: FirebaseListObservable<any>;

  constructor(public af: AngularFire, private router: Router) {
    this.recipes = af.database.list('/recipes');
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }

  members() {
    this.router.navigateByUrl('/members');

  }

  about() {
    this.router.navigateByUrl('/about');
  }

  ngOnInit() {
  }
}

// import {moveIn, fallIn, moveInLeft} from "../router.animations";
// import {Component} from "@angular/core/src/metadata/directives";
// import {Router} from '@angular/router';
//
// @Component({
//
//   templateUrl: './favorites.component.html',
//   //styleUrls: ['./members.component.css'],
//   animations: [moveIn(), fallIn(), moveInLeft()],
//   host: {'[@moveIn]': ''}
// })
// export class FavoritesComponent {




