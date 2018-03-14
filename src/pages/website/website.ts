import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestdetailsPage} from '../testdetails/testdetails';
import {TestModel} from '../models/test-model';
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
//private TestList:TestModel[] = [new TestModel(0,"web1","desc1"),new TestModel(1,"web2","desc2")];
public WebsiteName;
public items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.WebsiteName = navParams.get("site").name;
  }

  ionViewDidLoad() {
	  this.items = [
		{name: 'test 1', description: 'description 1', succeed: true},
		{name: 'test 2', description: 'description 2', succeed: false},
		{name: 'test 3', description: 'description 3', succeed: false}
		];
    console.log('ionViewDidLoad WebsitePage');
  }
  showDetailsPage(item) {
	  //for(var i = 0; i < this.TestList.length; i++){
		// if(i == index){
			 //this.navCtrl.push(TestdetailsPage,{"testName":this.TestList[i].name, "testDesc":this.TestList[i].description});
			 this.navCtrl.push(TestdetailsPage, {item: item});
  }
  }
	 // }
    


