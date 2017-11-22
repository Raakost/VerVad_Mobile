import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-image-slider',
  templateUrl: 'image-slider.html',
})
export class ImageSliderPage {
  @ViewChild(Slides) slides: Slides;

  images: any = [];
  selectedImage: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = this.navParams.get('data');
    this.selectedImage = this.navParams.get('index');
  }

  ionViewDidLoad() {
    console.log(this.images);
  }

  ngAfterViewInit() {
    this.slides.initialSlide = this.selectedImage;
  }
}
