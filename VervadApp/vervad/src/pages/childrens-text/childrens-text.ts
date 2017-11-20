import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChildrensTextDetailPage} from "../childrens-text-detail/childrens-text-detail";


@IonicPage()
@Component({
  selector: 'page-childrens-text',
  templateUrl: 'childrens-text.html',
})
export class ChildrensTextPage {
  pageTitle: string;
  texts: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageTitle = navParams.get('data').title;
    this.texts.push({
      author: 'Lise 5a',
      txtTitle: 'Tekst 1 overskrift',
      txt: 'Cras vitae gravida neque. Cras at auctor tortor. Vestibulum' +
      ' ante ipsum primis in faucibus orci luctus et ultrices posuere ' +
      'cubilia Curae; Maecenas vitae libero nisl. Curabitur pulvinar lacus ' +
      'eget fermentum volutpat. Sed tempus justo vel tempus dignissim. Morbi' +
      ' aliquet lorem justo, vitae sagittis ligula eleifend a. Nam tristique, ' +
      'sem sed feugiat pharetra, diam nisl accumsan odio, sed viverra neque ligul' +
      'a ut felis. Morbi id egestas lorem. Morbi vulputate ante felis, quis commodo' +
      ' purus molestie ac. Curabitur laoreet porta arcu, nec vestibulum eros molestie non.'
    });
    this.texts.push({
      author: 'Lone 7b',
      txtTitle: 'Tekst 2 overskrift',
      txt: 'Cras vitae gravida neque. Cras at auctor tortor. Vestibulum' +
      ' ante ipsum primis in faucibus orci luctus et ultrices posuere ' +
      'cubilia Curae; Maecenas vitae libero nisl. Curabitur pulvinar lacus ' +
      'eget fermentum volutpat. Sed tempus justo vel tempus dignissim. Morbi' +
      ' aliquet lorem justo, vitae sagittis ligula eleifend a. Nam tristique, ' +
      'sem sed feugiat pharetra, diam nisl accumsan odio, sed viverra neque ligul' +
      'a ut felis. Morbi id egestas lorem. Morbi vulputate ante felis, quis commodo' +
      ' purus molestie ac. Curabitur laoreet porta arcu, nec vestibulum eros molestie non.'
    });
    this.texts.push({
      author: 'Lars 3a',
      txtTitle: 'Tekst 3 overskrift',
      txt: 'Cras vitae gravida neque. Cras at auctor tortor. Vestibulum' +
      ' ante ipsum primis in faucibus orci luctus et ultrices posuere ' +
      'cubilia Curae; Maecenas vitae libero nisl. Curabitur pulvinar lacus ' +
      'eget fermentum volutpat. Sed tempus justo vel tempus dignissim. Morbi' +
      ' aliquet lorem justo, vitae sagittis ligula eleifend a. Nam tristique, ' +
      'sem sed feugiat pharetra, diam nisl accumsan odio, sed viverra neque ligul' +
      'a ut felis. Morbi id egestas lorem. Morbi vulputate ante felis, quis commodo' +
      ' purus molestie ac. Curabitur laoreet porta arcu, nec vestibulum eros molestie non.'
    });
    this.texts.push({
      author: 'Lillian 8c',
      txtTitle: 'Tekst 4 overskrift',
      txt: 'Cras vitae gravida neque. Cras at auctor tortor. Vestibulum' +
      ' ante ipsum primis in faucibus orci luctus et ultrices posuere ' +
      'cubilia Curae; Maecenas vitae libero nisl. Curabitur pulvinar lacus ' +
      'eget fermentum volutpat. Sed tempus justo vel tempus dignissim. Morbi' +
      ' aliquet lorem justo, vitae sagittis ligula eleifend a. Nam tristique, ' +
      'sem sed feugiat pharetra, diam nisl accumsan odio, sed viverra neque ligul' +
      'a ut felis. Morbi id egestas lorem. Morbi vulputate ante felis, quis commodo' +
      ' purus molestie ac. Curabitur laoreet porta arcu, nec vestibulum eros molestie non.'
    });
  }

  navigateToText(item) {
    this.navCtrl.push(ChildrensTextDetailPage, {data : item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrensTextPage');
  }

}
