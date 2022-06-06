import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'Grilled Veg Sandwich.',
      'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424_1280.png'
    ),
    new Recipe(
      'Burger',
      'Aloo Tikki Burger.',
      'https://cdn.pixabay.com/photo/2017/02/05/21/06/burger-2041192_1280.jpg'
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
