import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testdetails',
  templateUrl: 'testdetails.html',
})
export class TestdetailsPage {
public testName;
public testDescription;
public testStatus;
public testPriority;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.testName = navParams.get("item").name;
      this.testDescription = navParams.get("item").description;
      this.testStatus = navParams.get("item").succeed;
	  this.testPriority = navParams.get("item").priority;
      this.getstatus();
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
