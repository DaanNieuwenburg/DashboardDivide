import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {TestdetailsPage} from '../testdetails/testdetails';

@IonicPage()
@Component({
  selector: 'page-website',
  templateUrl: 'website.html',
})
export class WebsitePage {
public WebsiteName;
private WebsiteId;
private testRunId;
public items;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
	  //this.WebsiteName = navParams.get("site").name;
    this.websiteid = navParams.get("website");
    this.testRunId = navParams.get("item").id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsitePage');
  }
  // Push to details page
  showDetailsPage(item) {
			 this.navCtrl.push(TestdetailsPage, {item: item});
  }
  ionViewWillEnter(): void {
    this.load();
  }
  load(): void {
    this.http
      .get('http://apidivide.azurewebsites.net/api/testcase/'+this.websiteid+"/"+this.testRunId) //TODO CHANGE URL
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;
      },
      (error: any) => {
        console.dir(error);
      });
  }
}
