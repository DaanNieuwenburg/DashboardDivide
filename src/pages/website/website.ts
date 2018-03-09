import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestdetailsPage} from '../testdetails/testdetails';
/**
 * Generated class for the WebsitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-website',
  templateUrl: 'website.html',
})
export class WebsitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsitePage');
  }
  showDetailsPage() {
    this.navCtrl.push(TestdetailsPage,{testName:"test 1"});
}

}
