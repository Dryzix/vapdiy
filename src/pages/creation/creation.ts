import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Creation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creation',
  templateUrl: 'creation.html',
})
export class Creation {
  action: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.action = navParams.get('recipe') == undefined ? 'Création' : 'Modification';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Creation');
  }

}
