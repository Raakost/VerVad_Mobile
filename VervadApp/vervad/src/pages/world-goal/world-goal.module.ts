import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorldGoalPage } from './world-goal';

@NgModule({
  declarations: [
    WorldGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(WorldGoalPage),
  ],
})
export class WorldGoalPageModule {}
