import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WebsitePage} from '../website/website';

/**
 * Generated class for the TestrunpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testrunpage',
  templateUrl: 'testrunpage.html',
})
export class TestrunpagePage {
	public items;
  public testrunid;
  public websiteid;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    //this.websiteid = navParams.get("site").id;
    this.websiteid=24;
    this.items = [
   {id:0 ,name: 'test 1'},
   {id:1, name: 'test 2'},
   {id:2, name: 'test 3'}
  ];
  }
  showWebsitePage(item) {
       this.navCtrl.push(WebsitePage, {item: item, website:this.websiteid});
  }
  ionViewWillEnter(): void {
      //this.load();
    }
    load(): void {
      this.http
        .get('https://apidivide.azurewebsites.net/api/testrun/lastofwebsite/24') // TODO
        .subscribe((data: any) => {
          console.dir(data);
          this.items = data;
        },
        (error: any) => {
          console.dir(error);
        });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestrunpagePage');
  }

}
