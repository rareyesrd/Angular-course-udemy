import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];


  getIngredients(): Ingredient[]{
     return this.ingredients.slice();
  }
  
  addToIngredients(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
