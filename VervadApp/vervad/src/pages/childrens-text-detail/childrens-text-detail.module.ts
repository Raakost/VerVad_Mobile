import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildrensTextDetailPage } from './childrens-text-detail';

@NgModule({
  declarations: [
    ChildrensTextDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildrensTextDetailPage),
  ],
})
export class ChildrensTextDetailPageModule {}
