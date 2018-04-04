import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testdetails',
  templateUrl: 'testdetails.html',
})
export class TestdetailsPage {
public testID;
public testName;
public methodName;
public className;
public duration;
public startTime;
public endTime;
public asserts;
public testStatus;
public websiteUrl;
public testPriority;
public testDescription;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.testID = navParams.get("item").id;
  }
  // Triggers API Call
  ionViewWillEnter(): void {
      this.load();
    }
    load(): void {
      this.http
        .get('http://apidivide.azurewebsites.net/api/testcase/'+this.testID)
        .subscribe((data: any) => {
          console.dir(data);
          this.testName = data.name;
          this.testStatus = data.result.status;
          this.methodName = data.methodName;
          this.className = data.className;
          this.startTime = data.startTime;
          this.endTime = data.endTime;
          this.duration = data.duration + " sec";
          this.asserts = data.asserts;
          this.websiteUrl = data.website.url;
        },
        (error: any) => {
          console.dir(error);
        });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestdetailsPage');
  }

}
