import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebsitePage } from './website';

@NgModule({
  declarations: [
    WebsitePage,
  ],
  imports: [
    IonicPageModule.forChild(WebsitePage),
  ],
})
export class WebsitePageModule {}
