import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Creation } from '../creation/creation';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  recipes: Array<any>;
  items: Array<{recipe: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];

    this.nativeStorage.getItem('recipes')
        .then( data => {
              // console.log(data);
          this.recipes = data;
          // console.log(recipes);
          // console.log(recipes);

              // Let's populate this page with some filler content for funzies
              // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
              //   'american-football', 'boat', 'bluetooth', 'build'];
              //
            }
        );



  }

  itemTapped(event, item, index) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Creation, {
      recipe: item,
      index: index
    });
  }
}
