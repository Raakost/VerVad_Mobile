import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChildrensTextDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childrens-text-detail',
  templateUrl: 'childrens-text-detail.html',
})
export class ChildrensTextDetailPage {
text : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrensTextDetailPage');
  }

}
