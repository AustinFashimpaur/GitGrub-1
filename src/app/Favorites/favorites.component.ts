import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';
import {moveIn, fallIn, moveInLeft} from '../router.animations';
import {RecipeService} from "./recipe.service";


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
  public filteredFavs: any;

  constructor(public af: AngularFire, private router: Router, private recipeService: RecipeService) {
    this.recipes = af.database.list('/recipes');
    af.auth.subscribe(auth => {
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

  removeFavs() {
    this.recipeService.removeFavz();
  }

  getFavs(){
    this.filteredFavs = this.recipes.filter(recipe => {
      return (recipe.users && recipe.users.indexOf(this.name.uid) > -1);
    });
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




