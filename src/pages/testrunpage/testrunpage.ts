import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WebsitePage} from '../website/website';

@IonicPage()
@Component({
  selector: 'page-testrunpage',
  templateUrl: 'testrunpage.html',
})
export class TestrunPage {
	public items: Array<any> = []; // List items
  public testrunid;
  public websiteid;             // id of current website
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.websiteid = navParams.get("site").id;
  }
  // Parameter item = selected testrun
  // Parameter  website = website id
  showWebsitePage(item) {
       this.navCtrl.push(WebsitePage, {item: item, website:this.websiteid});
  }
  // Triggers the API call
  ionViewWillEnter(): void {
      this.load();
    }
    load(): void {
      this.http
        .get('https://apidivide.azurewebsites.net/api/testrun/24') // TODO
        .subscribe((data: any) => {
          console.dir(data);
          this.items = data;
        },
        (error: any) => {
          console.dir(error);
        });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestrunPage');
  }

}
