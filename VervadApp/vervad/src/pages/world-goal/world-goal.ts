import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GalleryPage} from "../gallery/gallery";
import {ChildrensTextPage} from "../childrens-text/childrens-text";
import {AudioPage} from "../audio/audio";
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import {VerVadServiceProvider} from "../../providers/ver-vad-service/ver-vad-service";


@IonicPage()
@Component({
  selector: 'page-world-goal',
  templateUrl: 'world-goal.html',
})
export class WorldGoalPage {
  worldGoal: any = undefined;
  accordionMenu: any = [];
  latitude: number = undefined;
  longitude: number = undefined;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private launchnavigator: LaunchNavigator, public service: VerVadServiceProvider) {


    this.worldGoal = navParams.get('data');
    console.log(this.worldGoal);

    // add categories for accordion menu.
    this.accordionMenu.push({
      title: 'childrensExpressions',
      menuItems: [
        {
          title: 'artwork',
          images: this.worldGoal.ChildrensDrawings
        },
        {
          title: 'texts'
        }
      ]
    });
    this.accordionMenu.push({
      title: 'musicVideo'
    });
    this.accordionMenu.push({
      title: 'landArt',
      images: this.worldGoal.LandArt
    });
  }

  // toggle open/close submenu for children's expressions.
  toggleSubMenu(index) {
    this.accordionMenu[index].open = !this.accordionMenu[index].open;
  }

  navigateToSubPage(menuItem) {
    // artwork gallery
    if (menuItem.title == 'artwork')
      this.navCtrl.push(GalleryPage, {data: menuItem});
    if (menuItem.title == 'texts')
      this.navCtrl.push(ChildrensTextPage, {data: menuItem});
  }

  clickMenuItem(index, menuItem) {
    if (index == 1) {
      this.navCtrl.push(AudioPage, {data: menuItem});
    }
    // LandArt
    else if (index == 2) {
      this.navCtrl.push(GalleryPage, {data: menuItem});
    }
  }

  navigateToDirectionsPage() {

    var ggCoords = this.worldGoal.Latitude.toString() + ", " + this.worldGoal.Longitude.toString();
    this.launchnavigator.navigate(ggCoords);
  }
}

