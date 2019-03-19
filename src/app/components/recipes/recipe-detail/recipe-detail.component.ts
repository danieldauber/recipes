import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";
import {RecipesService} from "../recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    @Input() recipe: Recipe;
    // ingredientsList : Ingredient[];

    constructor(private shoppingListService : ShoppingListService, private recipeService : RecipesService) { }

    ngOnInit() {
    }

    addShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
