import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Creation } from '../pages/creation/creation';
import { CreationForm } from '../components/creation-form/creation-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Creation,
    CreationForm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Creation,
    CreationForm
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
