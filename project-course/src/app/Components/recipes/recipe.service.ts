import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Name',
      'Test Description',
      'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg?imwidth=1400',
      [
        new Ingredient('Meat', 1),
        new Ingredient('wings fries', 20)
      ]),
    new Recipe('Another Test case',
      'Test Description',
      'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
      [
        new Ingredient('Rice', 2),
        new Ingredient('Potatoes', 7)
      ])
  ];

  constructor(private shoppinngListService: ShoppinglistService) { }
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addRecipeToShoppingList(ingredient: Ingredient[]): void {
    this.shoppinngListService.addIngredients(ingredient);
  }
}
