import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { RocketPage } from '../pages/rocket/rocket';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { CapsulesListPage } from '../pages/capsules-list/capsules-list';
import { CapsulePage } from '../pages/capsule/capsule';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';

@NgModule({
  declarations: [
    MyApp,
    LaunchListPage,
    CapsulesListPage,
    CapsulePage,
    RocketListPage,
    RocketPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LaunchListPage,
    CapsulesListPage,
    CapsulePage,
    RocketListPage,
    RocketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpacexApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
