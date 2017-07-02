import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() itemSelected = new EventEmitter<Recipe>();

  RecipeList: Recipe[] = [
    new Recipe('A Test Recipe 00', 'This is my recipe A', 'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg'),
    new Recipe('A Test Recipe 01', 'This is my recipe B', 'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg'),
    new Recipe('A Test Recipe 22', 'This is my recipe C', 'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg')
  ];

  constructor() { }

  onSelect(recipe: Recipe) {
    this.itemSelected.emit(recipe);
  }
}
