import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/Recipe';

@Injectable({
    providedIn: 'root'
  })

export class AuthRecipeService{

    constructor(private http: HttpClient){
        
    }

    getRecipes(){
        return this.http.get<Recipe[]>('http://localhost:8080/api/get-recipes');
      }
}