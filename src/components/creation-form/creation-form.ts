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

    this.model = new Recipe('', (new Date().toISOString()), 50, null, null, null, null, null, null);
    this.hasErrors = false;
    this.errors = [];

    console.log('Hello CreationForm Component');
    this.text = 'Hello World';
  }

  onSubmit() {

    this.hasErrors = false;
    this.errors = [];

    console.log(this.model);

    if(this.model.name == ''){
      this.errors.push("Vous devez spécifier un nom");
      this.hasErrors = true;
    }

    if(this.model.nicotine == null){
      this.errors.push("Vous devez choisir une quantitée de nicotine");
      this.hasErrors = true;
    }

    if(this.model.aromeRate == null){
      this.errors.push("Vous devez choisir un taux d'arôme");
      this.hasErrors = true;
    }

    if(this.model.totalQty == null &&
        this.model.baseQty == null &&
        this.model.boosterQty == null &&
        this.model.flavourQty == null){
      this.errors.push("Vous devez saisir au moins une quantité");
      this.hasErrors = true;
    }


    if(!this.hasErrors){
      if(this.model.totalQty != null){
        this.model.boosterQty = this.model.totalQty * this.model.nicotine / 20;
        this.model.flavourQty = this.model.totalQty * this.model.aromeRate / 100;
        this.model.baseQty = this.model.totalQty - (this.model.boosterQty + this.model.flavourQty);
      }
    }
  }

}
