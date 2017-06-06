import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Recipe} from './recipe'
import {NativeStorage} from '@ionic-native/native-storage';

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

    public hasErrors: boolean;
    public errors: Array<string>;
    public model: Recipe;
    public edit: boolean;


    constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {

        this.model = navParams.get('recipe') == undefined ? new Recipe('', (new Date().toISOString()), 50, null, null, null, null, null, null) : navParams.get('recipe');
        this.edit = navParams.get('recipe') == undefined ? false : true;
        this.hasErrors = false;
        this.errors = [];
    }

    onSubmit() {
        this.calc();
        let recipes = [];

        this.nativeStorage.getItem('recipes')
            .then(
                data => recipes = data,
                error => {
                    this.nativeStorage.setItem('recipes', recipes)
                        .then(
                            () => console.log('Stored item!'),
                            error => console.error('Error storing item', error)
                        );
                }
            );

        recipes[0] = this.model;

        this.nativeStorage.setItem('recipes', recipes)
            .then(
                () => console.log('Stored item!'),
                error => console.error('Error storing item', error)
            );

        this.nativeStorage.getItem('recipes')
            .then(
                data => console.log(data, data.length),
                error => console.error(error)
            );

        if (!this.hasErrors) {

        }
    }

    calc() {

        this.check();

        if (!this.hasErrors) {
            if (this.model.totalQty != null) {
                this.model.boosterQty = this.model.totalQty * this.model.nicotine / 20;
                this.model.flavourQty = this.model.totalQty * this.model.aromeRate / 100;
                this.model.baseQty = this.model.totalQty - (this.model.boosterQty + this.model.flavourQty);
            }
        }
    }

    check() {
        this.hasErrors = false;
        this.errors = [];

        if (this.model.name == '') {
            this.errors.push("Vous devez spécifier un nom");
            this.hasErrors = true;
        }

        if (this.model.nicotine == null) {
            this.errors.push("Vous devez choisir une quantitée de nicotine");
            this.hasErrors = true;
        }

        if (this.model.aromeRate == null) {
            this.errors.push("Vous devez choisir un taux d'arôme");
            this.hasErrors = true;
        }

        if (this.model.totalQty == null &&
            this.model.baseQty == null &&
            this.model.boosterQty == null &&
            this.model.flavourQty == null) {
            this.errors.push("Vous devez saisir au moins une quantité");
            this.hasErrors = true;
        }

        if ((this.model.baseQty == 0 || this.model.baseQty == null) &&
            (this.model.boosterQty == 0 || this.model.boosterQty == null) &&
            (this.model.flavourQty == 0 || this.model.flavourQty == null) &&
            (this.model.totalQty == 0 || this.model.totalQty == null)) {
            this.errors.push("Vous devez au moins saisir une quantité");
        }
    }

}
