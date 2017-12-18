import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalGoalPage } from './global-goal';

@NgModule({
  declarations: [
    GlobalGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalGoalPage),
  ],
})
export class WorldGoalPageModule {}
