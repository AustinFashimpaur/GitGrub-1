import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';
import {moveIn, fallIn, moveInLeft} from '../router.animations';
import {RecipeService} from "../Favorites/recipe.service";
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
// import {bootstrapItem} from "@angular/cli/lib/ast-tools";

@Component({
  selector: 'app-members',
  // directives: [ToasterContainerComponent],
  providers: [ToasterService],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  private toasterService: ToasterService;

  name: any;
  state: string = '';

  userSearch: string = '';
  public recipes: any[];
  public filteredRec: any[];

  constructor(public af: AngularFire, private router: Router, private recipeService: RecipeService, toasterService: ToasterService) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        // console.log(auth);
        this.name = auth;
      }
    });

    recipeService.getAll().subscribe(recipes => {
      this.recipes = recipes;
      this.filteredRec = this.recipes;
      // console.log(this.recipes);
    });

    this.toasterService = toasterService;
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }

  favz() {
    this.router.navigateByUrl('/favorites');

  }

  about() {
    this.router.navigateByUrl('/about');
  }

  myFilter() {
    this.filteredRec = this.recipes.filter(recipe => {
      return recipe.title.toLowerCase().indexOf(this.userSearch.toLowerCase()) > -1
    });
  }


  addFavs(recipe) {
    this.recipeService.addFavz(recipe);
    this.toasterService.pop('info', 'Added to favorites!');

  }

  removeFavs(recipe) {
    this.recipeService.removeFavz(recipe);
    this.toasterService.pop('warning', 'Removed from favorites!');
  }

  isFav(recipe) {
    return recipe.users && recipe.users[this.name.uid]

  }


  ngOnInit() {
  }
}

