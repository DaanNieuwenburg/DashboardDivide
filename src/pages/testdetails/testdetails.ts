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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.testName = navParams.get("item").name;
      this.testDescription = navParams.get("item").description;
      this.testStatus = navParams.get("item").succeed;
  }
  public getstatus() {
    if (this.testStatus == false)
      return "failed";
    else
      return "succeed";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestdetailsPage');
  }

}
