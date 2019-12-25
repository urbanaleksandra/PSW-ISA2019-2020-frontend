import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';

@Component({
  selector: 'app-auth-recipe',
  templateUrl: './auth-recipe.component.html',
  styleUrls: ['./auth-recipe.component.css']
})
export class AuthRecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
  }

  authRecipe(recipe){

  }

  getRecipes(){
    
  }
}
