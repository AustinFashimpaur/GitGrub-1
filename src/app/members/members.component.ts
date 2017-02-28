import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';
import {moveIn, fallIn, moveInLeft} from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  userSearch: string = '';
  public recipes: any[];
  public filteredRec: any[];

  constructor(public af: AngularFire, private router: Router) {
    af.database
      .list('/recipes')
      .subscribe(recipes => {
        this.recipes = recipes;
        this.filteredRec = this.recipes;
        console.log(this.recipes);
      });
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

  ngOnInit() {
  }
}
