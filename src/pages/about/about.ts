import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WebsitePage} from '../website/website';
import {TestModel} from 'models/test-models';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
showWebsitePage(selectedsite:string) {
	
    this.navCtrl.push(WebsitePage,{"websiteName":selectedsite});
}
  constructor(public navCtrl: NavController) {

  }

}
