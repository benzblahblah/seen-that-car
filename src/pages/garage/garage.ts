import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceholderPage } from '../placeholder/placeholder';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the GaragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-garage',
  templateUrl: 'garage.html',
})
export class GaragePage {

  private user: firebase.User;
  
  public subGarage: Subscription;
  public garages: Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    private afAuth: AngularFireAuth,
    private afDB:AngularFireDatabase,
    public navParams: NavParams
  ) {
  }

  ngOnInit(){
    this.userAuth();
  }

  ngOnDestroy(){
    this.subGarage.unsubscribe();
  }

  userAuth(){
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user = null;
        return;
      }
      this.user = user;
      this.getListOfGarage();
    });
  }

  getListOfGarage(){

    this.garages = this.afDB.list("Users/"+this.user.uid+"/Garage/").valueChanges();
    
    this.subGarage = this.garages.subscribe(data => {
    });

  }

  deleteCar(key: string){
    console.log("delete",key);
    
    this.afDB.object("Users/"+this.user.uid+"/Garage/"+key).remove()
    .then(res=>console.log("deleted"));
    
  }

}
