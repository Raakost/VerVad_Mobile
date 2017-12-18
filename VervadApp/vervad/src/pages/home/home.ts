import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Frontpage} from "../../models/frontpage";
import {VerVadServiceProvider} from "../../providers/ver-vad-service/ver-vad-service";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fp: Frontpage;

  constructor(public navCtrl: NavController, public service: VerVadServiceProvider, public translateService: TranslateService) {
   this.getFrontPage();
   translateService.onLangChange.subscribe((event : LangChangeEvent)=> {
     this.getFrontPage(event.lang);
   });
  }

  getFrontPage(language? : string){
    if(!language ){
      language = this.translateService.getDefaultLang();
    }
    this.service.getFrontpage(1, language).subscribe(frontPage =>{
      this.fp = frontPage;
    });
  }
}
