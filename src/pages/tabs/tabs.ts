import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CapturePage } from '../capture/capture';
import { GaragePage } from '../garage/garage';
import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = ExplorePage; //index 0
  tab2Root: any = CapturePage; //index 1
  tab3Root: any = GaragePage; //index 2
  tab4Root: any = ProfilePage; //index 3
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
