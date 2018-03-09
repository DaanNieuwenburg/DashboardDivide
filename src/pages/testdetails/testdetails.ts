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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.testName = navParams.get("testName");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestdetailsPage');
  }

}
