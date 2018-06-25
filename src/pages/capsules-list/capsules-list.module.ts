import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapsulesListPage } from './capsules-list';

@NgModule({
  declarations: [
    CapsulesListPage,
  ],
  imports: [
    IonicPageModule.forChild(CapsulesListPage),
  ],
})
export class CapsulesListPageModule {}
