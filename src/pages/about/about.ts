import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WebsitePage} from '../website/website';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
public sites;

showWebsitePage(site) {	
    this.navCtrl.push(WebsitePage,{site:site});
}
  constructor(public navCtrl: NavController) {
	this.sites = [
		{name: 'Epplejeck'},
		{name: 'Mensquare'}
		];
  }

}
