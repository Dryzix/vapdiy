import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";


@Injectable()
export class RecipeManager{

    private recipe: Recipe;
    private errors: Array<any>;

    constructor(){
        this.recipe = new Recipe('', (new Date().toISOString()), 50, null, null, null, null, null, null);
    }

    getRecipe(){
        return this.recipe;
    }

    setRecipe(recipe: Recipe){
        this.recipe = recipe;
    }

    calc() {

        this.check();

        if (!this.hasErrors()) {
            if (this.recipe.totalQty != null) {
                this.recipe.boosterQty = this.recipe.totalQty * this.recipe.nicotine / 20;
                this.recipe.flavourQty = this.recipe.totalQty * this.recipe.aromeRate / 100;
                this.recipe.baseQty = this.recipe.totalQty - (this.recipe.boosterQty + this.recipe.flavourQty);
            }
        }

        return this.recipe;
    }

    check() {
        this.errors = [];

        if (this.recipe.name == '') {
            this.errors.push("Vous devez spécifier un nom");
        }

        if (this.recipe.nicotine == null) {
            this.errors.push("Vous devez choisir une quantitée de nicotine");
        }

        if (this.recipe.aromeRate == null) {
            this.errors.push("Vous devez choisir un taux d'arôme");
        }

        if (this.recipe.totalQty == null &&
            this.recipe.baseQty == null &&
            this.recipe.boosterQty == null &&
            this.recipe.flavourQty == null) {
            this.errors.push("Vous devez saisir au moins une quantité");
        }

        if ((this.recipe.baseQty == 0 || this.recipe.baseQty == null) &&
            (this.recipe.boosterQty == 0 || this.recipe.boosterQty == null) &&
            (this.recipe.flavourQty == 0 || this.recipe.flavourQty == null) &&
            (this.recipe.totalQty == 0 || this.recipe.totalQty == null)) {
            this.errors.push("Vous devez au moins saisir une quantité");
        }
    }

    hasErrors(){
        return this.errors.length != 0;
    }

    getErrors(){
        return this.errors;
    }
}