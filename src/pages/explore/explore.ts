import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceholderPage } from '../placeholder/placeholder';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  private user: firebase.User;

  public subFeeds: Subscription;
  public feeds: Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    private afAuth: AngularFireAuth,
    private afDB:AngularFireDatabase,
    public navParams: NavParams
  ) {
  }

  ngOnInit(){
    this.userAuth();
    this.getListOfFeeds();
  }

  ngOnDestroy(){
    this.subFeeds.unsubscribe();
  }

  userAuth(){
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user = null;
        return;
      }
      this.user = user;
    });
  }

  getListOfFeeds(){

    this.feeds = this.afDB.list("Feeds").valueChanges();
    
    this.subFeeds = this.feeds.subscribe(data => {
      console.log("test",data);
    });

  }

  clickLike(key: string){
    console.log("clickLike", key);

    
    let sub = this.afDB.object("Users/"+this.user.uid+"/Like/"+key).valueChanges().subscribe(data => {
      //never like before then ++
      sub.unsubscribe();
      if(data==null){
        console.log("never like before");
        let subLike = this.afDB.object("Feeds/"+key+"/Like").valueChanges().subscribe(like => {
          subLike.unsubscribe();
          console.log("getLike",like);
          this.afDB.object("Feeds/"+key+"/Like").set((like as number)+1)
          .then(res=>{
            console.log("liked");
            this.afDB.object("Users/"+this.user.uid+"/Like/"+key).set(true);
          });
        });
      }else{
        console.log("already liked");
        let subLike = this.afDB.object("Feeds/"+key+"/Like").valueChanges().subscribe(like => {
          subLike.unsubscribe();
          console.log("getLike",like);
          this.afDB.object("Feeds/"+key+"/Like").set((like as number)-1)
          .then(res=>{
            console.log("unliked");
            this.afDB.object("Users/"+this.user.uid+"/Like/"+key).remove();
          });
        });
      }
    });
    
  }
}
