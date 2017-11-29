import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { AlertController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { PlaceholderPage }  from '../placeholder/placeholder'

@Component({
  selector: 'page-capture',
  templateUrl: 'capture.html'
})
export class CapturePage {

  public base64Image: string;

  public photoOrientation: number;

  constructor(
    public platform: Platform ,
    public alerCtrl: AlertController, 
    public navCtrl: NavController, 
    private camera: Camera, 
    public navParams: NavParams, 
    private mediaCapture: MediaCapture) { }
  
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
            this.nativeCapPicture();
          }
        }
      ]
    });
    confirm.present()
  }

  nativeCapPicture(){
    const options: CameraOptions = {
      quality: 25,
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
      
      this.navCtrl.push(PlaceholderPage, {photo:  this.base64Image });
     }, (err) => {
      // Handle error
     });
  }           

  takePhotoViaHTML(event){
    //reset input field and pic
    let pic = event.target.files[0];
    if(pic == null || pic.type!="image/jpeg"){
      console.log("image not in jpeg");
      return;
    }
    //GET orientation
    this.orientationReader(pic);
    //RESET picture orientation
    this.resetOrientationPhoto(pic);
  }

  resetOrientationPhoto(picture){
    var img = new Image();
    img.onload = this._handleResetOrientationPhotoLoaded.bind(this);
    img.src = URL.createObjectURL(picture);
  }

  _handleResetOrientationPhotoLoaded(readerEvt){
    var img = readerEvt.path[0];
    var width = img.width,
    height = img.height,
    canvas = document.createElement('canvas'),
    ctx = canvas.getContext("2d");

     if (4 < this.photoOrientation && this.photoOrientation < 9) {
      canvas.width = height;
      canvas.height = width;
    } else {
      canvas.width = width;
      canvas.height = height;
    }

    switch (this.photoOrientation) {
      case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
      case 3: ctx.transform(-1, 0, 0, -1, width, height ); break;
      case 4: ctx.transform(1, 0, 0, -1, 0, height ); break;
      case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
      case 6: ctx.transform(0, 1, -1, 0, height , 0); break;
      case 7: ctx.transform(0, -1, -1, 0, height , width); break;
      case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
      default: break;
    }

    ctx.drawImage(img, 0, 0);

    //export to base64 jpeg and set image quality  25%
    let imageData = canvas.toDataURL("image/jpeg",0.25);

    this.base64Image = imageData;
    this.navCtrl.push(PlaceholderPage, {photo:  this.base64Image });
  }

  orientationReader(picture){
    var reader = new FileReader();
    reader.onload = this._handleOrientationLoaded.bind(this);
    reader.readAsArrayBuffer(picture);
  }

  _handleOrientationLoaded(readerEvt){
    var view = new DataView(readerEvt.target.result);
    if (view.getUint16(0, false) != 0xFFD8){
      console.log("Error Picture not jped");
      return -2;
    }
    var length = view.byteLength, offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966){
          console.log("Error Picture not defined");
          return -1;
        } 
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112){
            let orientation = view.getUint16(offset + (i * 12) + 8, little);
            console.log("Picture orientation",orientation);
            this.photoOrientation = orientation;
            return orientation;
          }
      }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
  }

 
}
