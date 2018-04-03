import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {TestrunPage} from '../testrunpage/testrunpage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public sites: Array<any> = []; // to store returned data

showTestrunPage(site) { // id as parameter --> next page API call with id
    this.navCtrl.push(TestrunPage,{site:site});
}
  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

// Triggers website Loading
ionViewWillEnter(): void {
    this.load();
  }
  load(): void {
    this.http
      .get('https://apidivide.azurewebsites.net/api/website')
      .subscribe((data: any) => {
        console.dir(data);
        this.sites = data;
		    this.sites.sort(this.strAsc);
      },
      (error: any) => {
        console.dir(error);
      });
  }
  // Sort array ascending on websiteName
  strAsc(a, b) {
   if (a.websiteName>b.websiteName) return 1;
   else if (a.websiteName<b.websiteName) return -1;
   else return 0;
 }
}
