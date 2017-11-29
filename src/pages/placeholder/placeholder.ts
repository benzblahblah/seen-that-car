import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Loading } from 'ionic-angular/components/loading/loading';

/**
 * Generated class for the PlaceholderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-placeholder',
  templateUrl: 'placeholder.html',
})
export class PlaceholderPage {

  private user: firebase.User;
  public base64Image: string;
  private loading: Loading

  public storage = firebase.storage();

  public car = {
    username: "",
    userpicture: "",
    carpictire: "",
    caption: "",
    brand: "",
    model: "",
    color: "",
    license: "",
    key: "",
    Like: 0
  };

  constructor(
    public navCtrl: NavController, 
    private afAuth: AngularFireAuth,
    private afDB:AngularFireDatabase,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.base64Image = this.navParams.get("photo");
    this.userAuth();
  }

  userAuth(){
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user = null;
        return;
      }
      this.user = user;
      this.car.username = user.displayName;
      this.car.userpicture = user.photoURL;
    });
  }

  isValid(): boolean{
    if(this.car.brand == "" || this.car.caption == "" || this.car.color == "" || this.car.license == ""){
      return false;
    }else{
      return true;
    }
  }

  shareBtn () {
    this.presentLoading();
    console.log("shared button", this.car);

    let photoPath = "Feeds/"+new Date().getTime()+".jpg";
    const storageRef = this.storage.ref(photoPath);
    storageRef.putString(this.base64Image, "data_url")
    .then(() =>{
      console.log("Uploaded image");
    }) 
    .then(() => {
      //get image URL
      const storageRef = this.storage.ref(photoPath);
      storageRef.getDownloadURL()
      .then(url =>{
        this.car.carpictire = url;
        this.afDB.list("Feeds/").push(this.car)
        .then(result=> {
          console.log(result.key);
          this.afDB.list("Feeds").update(result.key,{key: result.key});
          console.log("added new feed",result);
          //Add to user garage

          this.afDB.list("Users/"+this.user.uid+"/Garage/").push({
            carpictire: this.car.carpictire,
            brand: this.car.brand,
            model: this.car.model,
            color: this.car.color,
            license: this.car.license,
            key: ""
          }).then(res=>{
            this.afDB.list("Users/"+this.user.uid+"/Garage/").update(res.key,{key: res.key})
            .then(re=>{
              console.log("added");
              this.loading.dismiss();
              this.navCtrl.pop();
            })
          });
        });
      });
    })
    .catch(error => {
      console.log("Error",error);
      this.loading.dismiss();
    });
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  }

}
