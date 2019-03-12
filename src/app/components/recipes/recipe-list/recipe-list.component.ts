import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A teste Recipe', 'This is a text',
      'https://www.bbcgoodfood.com/sites/default/files/' +
      'recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
      new Recipe('Another Recipe', 'This is a text',
          'https://www.bbcgoodfood.com/sites/default/files/' +
          'recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }
}
