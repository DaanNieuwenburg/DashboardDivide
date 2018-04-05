import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { WebsitePage } from '../pages/website/website';
import { OverviewPage } from '../pages/overview/overview';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {TestPage} from '../pages/test/test';
import {TestdetailsPage} from '../pages/testdetails/testdetails';
import {TestrunPage} from '../pages/testrunpage/testrunpage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    WebsitePage,
    OverviewPage,
    HomePage,
    TabsPage,
    TestrunPage,
	TestPage,
	TestdetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
	ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WebsitePage,
    OverviewPage,
    HomePage,
    TabsPage,
	TestPage,
  TestrunPage,
	TestdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
