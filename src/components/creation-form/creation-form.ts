import { Component } from '@angular/core';
import { Recipe } from './recipe'

/**
 * Generated class for the CreationForm component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'creation-form',
  templateUrl: 'creation-form.html'
})
export class CreationForm {


  text: string;
  public hasErrors: boolean;
  public errors: Array<string>;
  public model: Recipe;


  constructor() {

    this.model = new Recipe('', (new Date().toISOString()), 50, null, null, null, null, null);
    this.hasErrors = false;
    this.errors = [];

    console.log('Hello CreationForm Component');
    this.text = 'Hello World';
  }

  onSubmit() {

    this.hasErrors = true;

    console.log(this.model);

    if(this.model.name == ''){
      this.errors.push("Vous devez spécifier un nom");
    }
    if((this.model.baseQty == 0 || this.model.baseQty == null) &&
        (this.model.boosterQty == 0 || this.model.boosterQty == null) &&
        (this.model.flavourQty == 0 || this.model.flavourQty == null) &&
        (this.model.totalQty == 0 || this.model.totalQty == null)){
      this.errors.push("Vous devez au moins saisir une quantité");
    }
  }

}
