import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private Recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 00', 
            'This is my recipe A', 'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg', 
            [
                new Ingredient('sugar', 1),
                new Ingredient('salst', 2)
            ]),
        new Recipe(
            'A Test Recipe 01', 
            'This is my recipe B', 
            'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg', 
            [
                new Ingredient('sugar', 3),
                new Ingredient('salst', 1)
            ]),
        new Recipe(
            'A Test Recipe 22', 
            'This is my recipe C', 
            'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg', 
            [
                new Ingredient('sugar', 2),
                new Ingredient('salst', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes(){
        return this.Recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}