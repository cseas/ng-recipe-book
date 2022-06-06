import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'A super tasty Grilled Veg Sandwich.',
      'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424_1280.png',
      [new Ingredient('Bread', 2), new Ingredient('Cheese Slices', 1)]
    ),
    new Recipe(
      'Burger',
      'Vegetarian Aloo Tikki Burger with fries.',
      'https://cdn.pixabay.com/photo/2017/02/05/21/06/burger-2041192_1280.jpg',
      [
        new Ingredient('Burger Buns', 2),
        new Ingredient('Patty', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
