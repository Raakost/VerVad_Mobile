import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {WorldGoalPage} from "../pages/world-goal/world-goal";
import {TranslateService} from '@ngx-translate/core';
import {GlobalGoalServiceProvider} from "../providers/global-goal-service/global-goal-service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  curLang: string;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public translate: TranslateService,
              public service: GlobalGoalServiceProvider) {
    translate.setDefaultLang('da');
    this.initializeApp();

    let mockDataGoals = service.getGlobalGoals();
    let goalPages = [];
    for (let i = 0; i < mockDataGoals.length; i++) {
      let cur = mockDataGoals[i];
      goalPages.push({title: cur.Title, component: WorldGoalPage, data: cur})
    }
    this.pages = goalPages;
  }

  changeLanguage(language) {
    this.translate.use(language);
    this.curLang = language;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.curLang = this.translate.getDefaultLang();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component, {data: page.data});
  }
}
