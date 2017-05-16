import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationForm } from './creation-form';

@NgModule({
  declarations: [
    CreationForm,
  ],
  imports: [
    IonicPageModule.forChild(CreationForm),
  ],
  exports: [
    CreationForm
  ]
})
export class CreationFormModule {}
