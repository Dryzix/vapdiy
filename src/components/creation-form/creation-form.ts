import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import {Recipe} from '../../recipe/recipe'
import {LocalNotifications} from '@ionic-native/local-notifications';
import {RecipeManager} from '../../recipe/recipe-manager';
import {ReciptesRepository} from '../../recipe/recipe-repository';

/**
 * Generated class for the CreationForm component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'creation-form',
    templateUrl: 'creation-form.html',
    providers: [RecipeManager, ReciptesRepository]
})
export class CreationForm {

    private hasErrors: boolean;
    public errors: Array<string>;
    public model: Recipe;
    private index: number;
    private notif: LocalNotifications;
    private platform: Platform;
    private reciptesRepo: ReciptesRepository;


    constructor(public navCtrl: NavController, public navParams: NavParams,
                private localNotifications: LocalNotifications, public plt: Platform, public recipeManager: RecipeManager,
                private reciptesRepository: ReciptesRepository) {

        this.platform = plt;
        this.notif = localNotifications;
        this.index = navParams.get('index');
        this.reciptesRepo = reciptesRepository;
        this.errors = [];
        this.hasErrors = false;

        if(navParams.get('recipe') != undefined){
            recipeManager.setRecipe(navParams.get('recipe'));
        }

        this.model = this.recipeManager.getRecipe();
    }

    submit() {
        this.reciptesRepo.persist(this.model, this.index);
    }

    onSubmit() {
        this.model = this.recipeManager.calc();
        if(!this.recipeManager.hasErrors()) {
            this.submit();
            this.localNotifications.schedule({
                title: 'VapDIY',
                text: 'Votre recette est prête !',
                at: new Date(new Date().getTime() + 60),
                led: 'FF0000',
                sound: this.platform.is('android') ? 'file://coins.mp3' : 'file://coins.m4r',
            });
        }

        this.errors = this.recipeManager.getErrors();
        this.hasErrors = this.errors.length != 0 ;
    }

}
