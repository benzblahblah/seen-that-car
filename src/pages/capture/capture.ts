import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { PlaceholderPage }  from '../placeholder/placeholder'


@Component({
  selector: 'page-capture',
  templateUrl: 'capture.html'
})
export class CapturePage {

  public photo: any;
  public base64Image: string;

  constructor(public alerCtrl: AlertController, public navCtrl: NavController, private camera: Camera, public navParams: NavParams, private mediaCapture: MediaCapture) { }
  
  recordVideo(){
    let confirm = this.alerCtrl.create({
      title: 'Record the clip?',
      message: 'Do you agree to allow us to use your camera?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: ()=> {
            console.log('Agree clicked');
            const options: CaptureVideoOptions = {
              quality: 50,
              duration: 15
            }
            this.mediaCapture.captureVideo(options).then(
              (data: MediaFile[]) => console.log(data),
              (err: CaptureError) => console.error(err)
            );
          }
        }
      ]
    });
    confirm.present()
  }


  CapturePic() {
    let confirm = this.alerCtrl.create({
      title: 'Take a photo?',
      message: 'Do you agree to allow us to use your camera?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            const options: CameraOptions = {
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              saveToPhotoAlbum: true
            }

            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              this.base64Image = 'data:image/jpeg;base64,' + imageData;
              this.photo = this.base64Image;
             }, (err) => {
              // Handle error
             });

             // Once user capture the image then,
             // photo will be in the placeholder and automate license is simultaneously called.
             // Move to the form page (placeholder) that allow user to fill-in or edit the info before saving.
             
             this.navCtrl.push(PlaceholderPage);
          }            
        }
      ]
    });
    confirm.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapturePage');
  }
}
