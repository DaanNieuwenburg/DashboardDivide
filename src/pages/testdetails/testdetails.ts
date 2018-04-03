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
public testPriority;
public testDescription;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
	  /*this.testName = navParams.get("item").name;
      this.testDescription = navParams.get("item").description;
      this.testStatus = navParams.get("item").succeed;
	  this.testPriority = navParams.get("item").priority;*/
    //this.testID = navParams.get("item").id;
      //this.getstatus();
  }
  // Triggers API Call
  ionViewWillEnter(): void {
      this.load();
    }
    load(): void {
      this.http
        .get('http://apidivide.azurewebsites.net/api/testcase/148')
        .subscribe((data: any) => {
          console.dir(data);
          this.testName = data.name;
          this.testStatus = data.result;
          this.methodName = data.methodName;
          this.className = data.className;
          this.startTime = data.startTime;
          this.endTime = data.endTime;
          this.duration = data.duration + " sec";
          this.asserts = data.asserts;
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
