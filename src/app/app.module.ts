import { TabsPage } from './../pages/tabs/tabs';
import { SpecialPage } from './../pages/special/special';
import { GaragePage } from './../pages/garage/garage';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { MediaCapture } from '@ionic-native/media-capture';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environments } from "../environments/environments";

import { CapturePage } from '../pages/capture/capture';
import { ExplorePage } from '../pages/explore/explore';
import { FilteringPage } from '../pages/filtering/filtering';
import { LoginPage } from '../pages/login/login';
import { PlaceholderPage } from '../pages/placeholder/placeholder';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    CapturePage,
    ExplorePage,
    FilteringPage,
    GaragePage,
    LoginPage,
    PlaceholderPage,
    ProfilePage,
    SpecialPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CapturePage,
    ExplorePage,
    FilteringPage,
    GaragePage,
    LoginPage,
    PlaceholderPage,
    ProfilePage,
    SpecialPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AngularFireDatabase,
    MediaCapture,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}