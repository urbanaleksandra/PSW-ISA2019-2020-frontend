import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { AuthRecipeService } from '../service/auth-recipe.service';
import { Drug } from '../model/Drug';

@Component({
  selector: 'app-auth-recipe',
  templateUrl: './auth-recipe.component.html',
  styleUrls: ['./auth-recipe.component.css']
})
export class AuthRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  drug: Drug = new Drug();
  constructor(private service: AuthRecipeService) { }

  ngOnInit() {
    this.getRecipes();
    
  }

  authRecipe(recipe){
    this.service.authRecipeService(recipe).subscribe(
      (result)=>{
        alert("Successfully authed!");
        this.getRecipes();
     })       
    
  }

  getDrug(recipe){
    this.service.getDrug(recipe).subscribe(
      data=>{
        this.drug = data;
        console.log(this.recipes);
      },
      error => {
        console.log(error);
        }
    )
    return this.drug.name;
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
