import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return [...this.ingredients];
  }
}
