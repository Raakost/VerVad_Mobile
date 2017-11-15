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
      title: 'Børns Udtryk',
      menuItems: [
        {
          type: 'artwork',
          title: 'Tegninger & Malerier'
        },
        {
          type: 'sculptures',
          title: 'Kunstværker & Skulpturer'
        },
        {
          type: 'texts',
          title: 'Tekster'
        }
      ]
    });
    this.accordionMenu.push({
      title: 'Musik & Video'
    });
    this.accordionMenu.push({
      title: 'Land Art'
    });
  }

  // toggle open/close submenu for children's expressions.
  toggleSubMenu(index) {
    this.accordionMenu[index].open = !this.accordionMenu[index].open;
    console.log('submenu childrens experssions');
  }

  navigateToSubPage(menuItem) {
    // artwork gallery
    if (menuItem.type == 'artwork')
      this.navCtrl.push(GalleryPage, {data: menuItem});
    // sculptures gallery
    if (menuItem.type == 'sculptures')
      this.navCtrl.push(GalleryPage, {data: menuItem});
    if (menuItem.type == 'texts')
      this.navCtrl.push(ChildrensTextPage, {data: menuItem});
    console.log(menuItem.type);
  }

  clickMenuItem(index, menuItem) {
    if (index == 1) {
      this.navCtrl.push(AudioPage);
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
