import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestrunPage } from './testrunpage';

@NgModule({
  declarations: [
    TestrunPage,
  ],
  imports: [
    IonicPageModule.forChild(TestrunPage),
  ],
})
export class TestrunPageModule {}
