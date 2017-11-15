import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


@IonicPage()
@Component({
  selector: 'page-image-slider',
  templateUrl: 'image-slider.html',
})
export class ImageSliderPage {
  @ViewChild(Slides) slides: Slides;
  images: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public screenOrientation: ScreenOrientation) {
    console.log(this.screenOrientation.type);
   // screenOrientation.unlock();
  }

  //ngOnDestroy(){
  //this.screenOrientation.lock('portrait');
  //}

  ionViewDidLoad() {
    this.images = this.navParams.get('data');
  }


}
