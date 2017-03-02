import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';


@Injectable()

export class RecipeService {
  name: any;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        // console.log(auth);
        this.name = auth;
      }
    });
  }

  getAll() {
    return this.af.database.list('/recipes');
  };

// Add favorites to list (stays on service)
  addFavz(recipe) {
    console.log("Favz is called");
    // console.log(recipe);
    const newFav = this.af.database.object(`/recipes/${recipe.$key}/users`);
    const key = {};
    key[this.name.uid] = true;
    newFav.update(key);


  }

// delete fav from user
  removeFavz(recipe) {
    console.log("Favz is called");
    // console.log(recipe);
    const newFav = this.af.database.object(`/recipes/${recipe.$key}/users`);
    const key = {};
    key[this.name.uid] = false;
    newFav.update(key);
  }

}
