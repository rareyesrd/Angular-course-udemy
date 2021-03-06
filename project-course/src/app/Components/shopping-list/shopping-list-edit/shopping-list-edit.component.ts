import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('inputName', { static: true }) inputNameRef: ElementRef;
  @ViewChild('inputAmount', { static: true }) inputAmountRef: ElementRef;

  constructor(private shoppingListService: ShoppinglistService) {}
  ngOnInit(): void {}

  onAdd(): void {
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addToIngredients(newIngredient);
  }
}
