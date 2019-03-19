import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private shoppingListService : ShoppingListService) { }

    ngOnInit() {
    }

    addItem() {

        const nameItem = this.nameInputRef.nativeElement.value;
        const amountItem = this.amountInputRef.nativeElement.value;

        const newIngredientAdded = new Ingredient(nameItem, amountItem);

        this.shoppingListService.addIngredient(newIngredientAdded);

    }
}
