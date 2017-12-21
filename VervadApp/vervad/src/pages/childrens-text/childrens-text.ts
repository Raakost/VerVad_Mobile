import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChildrensTextDetailPage} from "../childrens-text-detail/childrens-text-detail";
import {VerVadServiceProvider} from "../../providers/ver-vad-service/ver-vad-service";


@IonicPage()
@Component({
  selector: 'page-childrens-text',
  templateUrl: 'childrens-text.html',
})
export class ChildrensTextPage {
  pageTitle: string;
  texts: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: VerVadServiceProvider) {
    this.texts = navParams.get('data').texts;
    console.log(this.texts);
  }

  navigateToText(item) {
    this.navCtrl.push(ChildrensTextDetailPage, {data: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrensTextPage');
  }

}
