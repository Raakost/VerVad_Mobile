import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {WorldGoalPage} from "../pages/world-goal/world-goal";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


    var mockDataGoals = {
      goals: [
        {
          Title: 'Verdensmål Titel #1',
          Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl.',
          Latitude: 9,
          Longitude: 55,
          Image: 'https://placeimg.com/500/300/nature',
          Poems: [
            {
              Title: 'Digt #1',
              Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ante diam, a rhoncus nisi faucibus sit amet. Aenean lorem.'
            }
          ], Story: [
          {
            Title: 'Eventyr #1',
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ante diam, a rhoncus nisi faucibus sit amet. Aenean lorem.'
          }
        ],
          LandArt: [
            {
              Title: 'Land art #1',
              Image: 'https://dummyimage.com/600x400/000000/00ffae&text=Billede+af+Land+Art'
            }
          ],
          KidsArt: [
            {
              Title: 'Børns Kunst #1',
              Image: 'https://dummyimage.com/600x400/000000/00ffae&text=Billede+af+B%C3%B8rns+Kunst'
            }
          ]
        },
        {
          Title: 'Verdensmål Titel #2',
          Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl.',
          Latitude: 9,
          Longitude: 55,
          Image: 'https://placeimg.com/500/300/nature',
          Texts: [
            {
              Title: 'Digt #2',
              Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ante diam, a rhoncus nisi faucibus sit amet. Aenean lorem.'
            }
          ], Story: [
          {
            Title: 'Eventyr #2',
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ante diam, a rhoncus nisi faucibus sit amet. Aenean lorem.'
          }
        ],
          LandArt: [
            {
              Title: 'Land art #2',
              Image: 'https://dummyimage.com/600x400/000000/00ffae&text=Billede+af+Land+Art'
            }
          ],
          KidsArt: [
            {
              Title: 'Børns Kunst #2',
              Image: 'https://dummyimage.com/600x400/000000/00ffae&text=Billede+af+B%C3%B8rns+Kunst'
            }
          ]
        },
        {
          Title: 'Verdensmål Titel #3',
          Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl.',
          Latitude: 9,
          Longitude: 55,
          Image: 'https://placeimg.com/500/300/nature',
          Poems: [
            {
              Title: 'Digt #3',
              Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ante diam, a rhoncus nisi faucibus sit amet. Aenean lorem.'
            }
          ], Story: [
          {
            Title: 'Eventyr #3',
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ante diam, a rhoncus nisi faucibus sit amet. Aenean lorem.'
          }
        ],
          LandArt: [
            {
              Title: 'Land art #3',
              Image: 'https://dummyimage.com/600x400/000000/00ffae&text=Billede+af+Land+Art'
            }
          ],
          KidsArt: [
            {
              Title: 'Børns Kunst #3',
              Image: 'https://dummyimage.com/600x400/000000/00ffae&text=Billede+af+B%C3%B8rns+Kunst'
            }
          ]
        }
      ]
    };

    var goalPages = [];
    for (var i = 0; i < mockDataGoals.goals.length; i++) {
      var cur = mockDataGoals.goals[i];
      goalPages.push({title: cur.Title, component: WorldGoalPage, data: cur})
    }
    this.pages = goalPages;
  }

  changeLanguage(){

  };

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component, {data: page.data});
  }
}
