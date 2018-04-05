import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestPage} from '../test/test';

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
       this.navCtrl.push(TestPage, {item: item, website:this.websiteid});
  }
  // Triggers the API call
  ionViewWillEnter(): void {
      this.load();
    }
    load(): void {
      this.http
        .get('https://apidivide.azurewebsites.net/api/testrun/'+this.websiteid) // TODO
        .subscribe((data: any) => {
          console.dir(data);
          this.items = data;
          this.items.sort(this.strDesc);
        },
        (error: any) => {
          console.dir(error);
        });
    }
    strDesc(a, b) {
     if (a.startTime>b.startTime) return -1;
     else if (a.startTime<b.startTime) return 1;
     else return 0;
   }
   doRefresh(refresher){
     console.log('Begin async operation', refresher);
     this.items.length = 0;
     this.load();
     setTimeout(() => {
       console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestrunPage');
  }

}
