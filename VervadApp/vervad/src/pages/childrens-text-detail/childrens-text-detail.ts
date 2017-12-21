import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-childrens-text-detail',
  templateUrl: 'childrens-text-detail.html',
})
export class ChildrensTextDetailPage {
  text: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = navParams.get('data');
    console.log(this.text);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrensTextDetailPage');
  }

}
