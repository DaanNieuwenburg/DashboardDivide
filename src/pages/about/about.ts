import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {WebsitePage} from '../website/website';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public sites;
//  public items: Array<any> = []; // to store returned php data

showWebsitePage(site) {	
    this.navCtrl.push(WebsitePage,{site:site});
}
  constructor(public navCtrl: NavController, public http: HttpClient) {
  // remove this code when using sql 
	this.sites = [
		{name: 'Epplejeck'},
		{name: 'Mensquare'}
		];
  }

// Triggers website Loading
/*ionViewWillEnter(): void {
    this.load();
  }
  load(): void {
    this.http
      .get('http://www.YOUR-SERVER-ADDRESS.SUFFIX/retrieve-data.php')
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;
      },
      (error: any) => {
        console.dir(error);
      });
  }*/
}
