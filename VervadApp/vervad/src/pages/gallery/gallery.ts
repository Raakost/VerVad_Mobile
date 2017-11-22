import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ImageSliderPage} from "../image-slider/image-slider";


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  images: string[];
  rows: any;
  pageTitle: string;
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = navParams.get('data').images;
    this.pageTitle = navParams.get('data').title;
  }

  getImageIndex(item){
    return this.images.indexOf(item);
  }

  getTriples() {
    let triples = [];
    let length = this.images.length;
    for (let i = 0; i < length; i += 3) {
      let row = [];
      row.push(this.images[i]);
      if (i + 1 < length) {
        row.push(this.images[i + 1]);
      }
      if (i + 2 < length) {
        row.push(this.images[i + 2]);
      }
      triples.push(row);
    }
    return triples;
  }

  imageClick(index) {
    this.navCtrl.push(ImageSliderPage, {'data': this.images, 'index': index});

  }

}
