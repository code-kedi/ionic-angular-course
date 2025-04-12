import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: false,
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Coq Au Vin',
      imageUrl:
        'https://images.pexels.com/photos/3981486/pexels-photo-3981486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ingredients: [
        'chicken',
        'carrots',
        'butter',
        'tomato puree',
        'chicken stock',
        'shallots',
        'potatoes',
        'red wine',
      ],
    },
    {
      id: '2',
      title: 'French Toast',
      imageUrl:
        'https://images.pexels.com/photos/4397306/pexels-photo-4397306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ingredients: [
        'toast',
        'egg',
        'milk',
        'honey',
        'butter',
        'cinnamon',
        'maple sirup',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
