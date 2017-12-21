import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {GlobalGoalPage} from "../pages/global-goal/global-goal";
import {TranslateService} from '@ngx-translate/core';
import {VerVadServiceProvider} from "../providers/ver-vad-service/ver-vad-service";
import {GlobalGoal} from "../models/globalGoal";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  chosenLang: string;
  gg: Array<GlobalGoal> = [];

  /*Set default and chosenLang in the app to Danish.*/
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translateService: TranslateService, public service: VerVadServiceProvider) {
    translateService.setDefaultLang('da');
    this.initializeApp();
    this.chosenLang = translateService.getDefaultLang();
    this.startApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  startApp() {
    this.service.getGlobalGoalList(this.chosenLang).subscribe(goals => {
      this.gg = goals;
      let goalPages = [];
      for (let i = 0; i < this.gg.length; i++) {
        let cur = this.gg[i];
        goalPages.push({title: cur.Title, component: GlobalGoalPage, data: cur})
      }
      this.pages = goalPages;
    });
  }

  changeLanguage(language) {
    this.translateService.use(language);
    this.chosenLang = language;
    this.startApp();
  }

  openPage(page) {
    this.nav.push(page.component, {data: page.data});
  }
}
