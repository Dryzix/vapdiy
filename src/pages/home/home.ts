import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public options= [
    {label: "3 ml", value: "3"}
  ]
  constructor(public navCtrl: NavController) {

  }

}
