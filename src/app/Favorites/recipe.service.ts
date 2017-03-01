import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';


@Injectable()
export class RecipeService {
  constructor(public af: AngularFire){}

  getAll() {
    return this.af.database.list('/recipes');
  };

// Returns the User Favorites
  getFavz() {

  }

// Add favorites to list (stays on service)
  addFavz(){
    console.log("Favz is called");

  }

// delete fav from user
  removeFavz() {

  }

}
