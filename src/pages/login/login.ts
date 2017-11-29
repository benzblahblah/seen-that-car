import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private user: firebase.User;

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    private afDB: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
    private platform: Platform 
  ) {
    this.menu.enable(false);
    this.userAuth();
    console.log("LoginPage - UserAuth");
  }

  login(provider)
  {
    let signInProvider = null;

    switch (provider) {
      case "facebook":
        signInProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case "google":
        signInProvider = new firebase.auth.GoogleAuthProvider();
        break;
    }

    if (this.platform.is('cordova')){
      this.afAuth.auth.signInWithRedirect(signInProvider)
      .then(() => {
        this.afAuth.auth.getRedirectResult()
        .then(result => console.log("Logged-in with "+provider,result))
        .catch(error => console.log("Error Sing-in with "+provider,error));
      });
    }else{
      this.afAuth.auth.signInWithPopup(signInProvider)
      .then(result => console.log("Logged-in with "+provider,result))
      .catch(error => console.log("Error Sing-in with "+provider,error));
    }
  }

  userAuth(){
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user == null;
        return;
      }
      this.user = user;
      this.createUser();
      this.menu.enable(true);
      // this.navCtrl.setRoot('MenuPage'); old.version before move menu to app.component.ts
      this.navCtrl.setRoot(TabsPage);
      
    });
  }

  createUser(){
    const dbUserRef = this.afDB.object('Users/'+this.user.uid);
    let dbUser = dbUserRef.valueChanges();
    let sub = dbUser.subscribe(userData => {
      if(userData !== null){
        console.log("User already exist");
      }else{
        console.log("User not exist");

        let Email = this.user.email;
        let Name = this.user.displayName;
        let Image = this.user.photoURL;

        dbUserRef.set({Email,Name,Image})
        .then(res=>console.log("Added new user to firedatabase"));
      }
      sub.unsubscribe();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
