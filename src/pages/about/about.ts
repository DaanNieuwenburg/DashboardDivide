import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WebsitePage} from '../website/website';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

showWebsitePage() {
    this.navCtrl.push(WebsitePage);
}
  constructor(public navCtrl: NavController) {

  }

}
