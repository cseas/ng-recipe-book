import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'Grilled Veg Sandwich.',
      'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424_1280.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
