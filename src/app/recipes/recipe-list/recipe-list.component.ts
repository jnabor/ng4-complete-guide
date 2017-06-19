import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[] = [
    new Recipe('A Test Recipe', 'This is my recipe', 'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
