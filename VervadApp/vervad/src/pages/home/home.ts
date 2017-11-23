import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Frontpage} from "../../models/frontpage";
import {FrontpageServiceProvider} from "../../providers/frontpage-service/frontpage-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fp: Frontpage;

  constructor(public navCtrl: NavController, public service: FrontpageServiceProvider) {
    this.service.getFrontpage(1, 'da').subscribe(param =>{
      this.fp = param;
      console.log(param);
    });
  }

}
