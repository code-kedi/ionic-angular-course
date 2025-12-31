import { Component, input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  standalone: false,
})
export class RecipeItemComponent implements OnInit {
  recipeItem = input.required<Recipe>();

  constructor() {}

  ngOnInit() {}
}
