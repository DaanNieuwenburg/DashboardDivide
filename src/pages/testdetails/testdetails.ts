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
	  /*this.testName = navParams.get("item").name;
      this.testStatus = navParams.get("item").result;
      this.methodName = navParams.get("item").methodName;
	  this.className = navParams.get("item").className;
    this.startTime = navParams.get("item").startTime;
    this.endTime = navParams.get("item").endTime;
    this.duration = navParams.get("item").duration + " sec";
    this.asserts = navParams.get("item").asserts;*/
    this.testID = navParams.get("item").id;
      //this.getstatus();
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
  // Check if test has succeeded or not
  public getstatus(): void {
    if (this.testStatus == false) {
      this.testStatus = "failed";
    }
    else {
      this.testStatus = "succeed";
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestdetailsPage');
  }

}
