import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GalleryPage} from "../gallery/gallery";
import {DirectionsPage} from "../directions/directions";
import {ChildrensTextPage} from "../childrens-text/childrens-text";
import {AudioPage} from "../audio/audio";


@IonicPage()
@Component({
  selector: 'page-world-goal',
  templateUrl: 'world-goal.html',
})
export class WorldGoalPage {
  worldGoal: any = undefined;
  accordionMenu: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.worldGoal = navParams.get('data');
    this.accordionMenu.push({
      title: 'childrensExpressions',
      menuItems: [
        {
          title: 'artwork'
        },
        {
          title: 'sculptures'
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
      title: 'landArt'
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
    // sculptures gallery
    if (menuItem.title == 'sculptures')
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
    this.navCtrl.push(DirectionsPage);
  }


}
