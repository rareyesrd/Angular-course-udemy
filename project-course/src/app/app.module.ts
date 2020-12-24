import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ShoppingListComponent } from './Feature/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Components/shopping/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './Model/ingredient/ingredient.component';
import { RecipeBookComponent } from './Feature/recipe-book/recipe-book.component';
import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './Model/recipe/recipe.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { ShoppingComponent } from './components/shopping/shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipesComponent,
    ShoppingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
