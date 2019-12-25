import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { AuthRecipeService } from '../service/auth-recipe.service';

@Component({
  selector: 'app-auth-recipe',
  templateUrl: './auth-recipe.component.html',
  styleUrls: ['./auth-recipe.component.css']
})
export class AuthRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  
  constructor(private service: AuthRecipeService) { }

  ngOnInit() {
    this.getRecipes();
    
  }

  authRecipe(recipe){

  }

  getRecipes(){
    this.service.getRecipes().subscribe(
      data=>{
        this.recipes = data;
        console.log(this.recipes);
      },
      error => {
        console.log(error);
        }
    )
  }
}
