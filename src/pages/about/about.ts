import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {WebsitePage} from '../website/website';
//import {WebsiteModel} from '../../models/websiteModel';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //public sites;
  public sites: Array<any> = []; // to store returned php data

showWebsitePage(site) {	
    this.navCtrl.push(WebsitePage,{site:site});
}
  constructor(public navCtrl: NavController, public http: HttpClient) {
  // remove this code when using sql 
	/*this.sites = [
		{name: 'Epplejeck'},
		{name: 'Mensquare'}
		];*/
  }

// Triggers website Loading
ionViewWillEnter(): void {
    this.load();
  }
  load(): void {
    this.http
      .get('https://divideuitestapi.azurewebsites.net/api/website')
      .subscribe((data: any) => {
        console.dir(data);
        this.sites = data;
      },
      (error: any) => {
        console.dir(error);
      });
  }
}
