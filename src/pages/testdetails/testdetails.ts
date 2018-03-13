import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestModel} from 'models/test-models';

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
public test:TestModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.testName = navParams.get("item").name;
	  this.testDescription = navParams.get("item").description;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestdetailsPage');
  }

}
