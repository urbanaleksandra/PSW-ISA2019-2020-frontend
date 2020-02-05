import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { AuthRecipeService } from '../service/auth-recipe.service';
import { Drug } from '../model/Drug';
import { AppointmentReportService } from '../service/appointment-report.service';

@Component({
  selector: 'app-auth-recipe',
  templateUrl: './auth-recipe.component.html',
  styleUrls: ['./auth-recipe.component.css']
})
export class AuthRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  drug: Drug = new Drug();
  drugs: Drug[] = [];
  constructor(private service: AuthRecipeService) { }

  ngOnInit() {
    this.getRecipesDTO();
    
  }

  authRecipe(recipe){
    this.service.authRecipeService(recipe).subscribe(
      (result)=>{
        alert("Successfully authed!");
        this.getRecipesDTO();
     })       
    
  }

  getRecipesDTO(){
    this.service.getRecipeDTO().subscribe(
      data=>{
        this.recipes = data;
        console.log(this.recipes);
      },
      error => {
        console.log(error);
        }
    )
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
