import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
	  this.setpriority();
  }
  public setpriority():void{
	  if(this.testPriority == '1')
		  this.testPriority = "high priority";
	  else if(this.testPriority == '2')
		  this.testPriority = "mid priority";
	  else
		  this.testPriority = "low priority";
  }
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
