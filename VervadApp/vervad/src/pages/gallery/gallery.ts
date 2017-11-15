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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = [
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature",
      "https://placeimg.com/500/400/nature"];
    this.pageTitle = navParams.get('data').title;
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

  imageClick() {
    this.navCtrl.push(ImageSliderPage, {data: this.images});

  }

}
