import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildrensTextPage } from './childrens-text';

@NgModule({
  declarations: [
    ChildrensTextPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildrensTextPage),
  ],
})
export class ChildrensTextPageModule {}
