import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { ReciptesRepository } from '../../recipe/recipe-repository';
import { Creation } from '../creation/creation';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ReciptesRepository]
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  recipes: Array<any>;
  items: Array<{recipe: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, private reciptesRepository: ReciptesRepository) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];

    reciptesRepository.getReciptes().then(data => this.recipes = data);
  }

  itemTapped(event, item, index) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Creation, {
      recipe: item,
      index: index
    });
  }
}
