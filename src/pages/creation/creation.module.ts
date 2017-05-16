import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Creation } from './creation';

@NgModule({
  declarations: [
    Creation
  ],
  imports: [
    IonicPageModule.forChild(Creation)
  ],
  exports: [
    Creation
  ]
})
export class CreationModule {}
