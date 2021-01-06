import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoopinglistService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addToIngredients(ing: Ingredient){
    this.ingredients.push(ing);
  }

  getIngredients(): Ingredient[]{
     return this.ingredients;
  }
}
