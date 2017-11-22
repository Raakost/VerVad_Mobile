import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Frontpage} from "../../models/frontpage";
import {FrontpageServiceProvider} from "../../providers/frontpage-service/frontpage-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fp: Frontpage = new Frontpage();

  constructor(public navCtrl: NavController, public service : FrontpageServiceProvider) {
   this.fp = service.getFrontpage();
  }
}
