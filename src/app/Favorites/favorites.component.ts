import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';
import {moveIn, fallIn, moveInLeft} from '../router.animations';
import {RecipeService} from "./recipe.service";
import {Observable} from "rxjs";
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';


@Component({
  selector: 'app-members',
  providers: [ToasterService],
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft(),],
  host: {'[@moveIn]': ''}
})
export class FavoritesComponent implements OnInit {
  private toasterService: ToasterService;
  name: any;
  state: string = '';


  recipes: Observable<any>;


  constructor(public af: AngularFire, private router: Router, private recipeService: RecipeService, toasterService: ToasterService) {
    this.recipes = af.database.list('/recipes');
    af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

    this.recipes = recipeService.getAll().map(recipes => {
      // console.log(recipes.users);
      return recipes.filter(recipe => {
        if (recipe.users && recipe.users[this.name.uid]) {
          return true;
        }
        else {
          return false;
        }
      });

    });
    this.toasterService = toasterService;

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

  removeFavs(recipe) {
    this.recipeService.removeFavz(recipe);
    this.toasterService.pop('warning', 'Removed', recipe.title + ' from Favorites');
  }


  ngOnInit() {
  }
}



