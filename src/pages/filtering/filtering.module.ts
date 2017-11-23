import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilteringPage } from './filtering';

@NgModule({
  declarations: [
    FilteringPage,
  ],
  imports: [
    IonicPageModule.forChild(FilteringPage),
  ],
})
export class FilteringPageModule {}
