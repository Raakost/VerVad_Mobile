import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Frontpage} from "../../models/frontpage";
import {VerVadServiceProvider} from "../../providers/ver-vad-service/ver-vad-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fp: Frontpage;

  constructor(public navCtrl: NavController, public service: VerVadServiceProvider) {
    this.service.getFrontpage(1, 'da').subscribe(param =>{
      this.fp = param;
      console.log(param);
    });
  }

}
