import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { SplashScreen } from '@ionic-native/splash-screen';
import { ExplorePage } from '../pages/explore/explore';
import { LoginPage } from '../pages/login/login';
import { GaragePage } from '../pages/garage/garage';

import { AngularFireAuth } from 'angularfire2/auth';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
  logsOut?: boolean;  
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: PageInterface[] = [
    { title: 'Explore', pageName: 'TabsPage', tabComponent: ExplorePage, index: 0, icon: 'ios-search' },
    // { title: 'Camera', pageName: 'TabsPage', tabComponent: 'CapturePage', index: 1, icon: 'ios-camera' },
    // { title: 'Garage', pageName: 'TabsPage', tabComponent: 'GaragePage', index: 2, icon: 'ios-car' },
    // { title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 3, icon: 'ios-person' },
    { title: 'Logout', pageName: 'TabsPage', icon: 'ios-log-out', logsOut: true },
    // { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
    
  ];
  // rootPage:any = TabsPage;
  // rootPage: any;

  constructor(
    platform: Platform,
    private afAuth: AngularFireAuth,
    statusBar: StatusBar,
    public app: App,
    splashScreen: SplashScreen,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
      console.log('page-index: '+page.index)
    }

    if (page.logsOut === true) {
      this.signOut();
      return;
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      // this.nav.setRoot(page.pageName, params);

      // Set the root of the nav with params if it's a tab index
      this.nav.setRoot(page.pageName, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  signOut() {
    console.log('Sign-out Button Pressed');
    this.afAuth.auth.signOut()
    .then( result => {
      console.log("Sign-out",result);
      this.nav.setRoot(LoginPage);
    })
    .catch( reason => {
      console.error('Error Sing-out: ', reason);
    })
  }

}
