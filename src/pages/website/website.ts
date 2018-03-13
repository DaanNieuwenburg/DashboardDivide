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
private TestList:TestModel[] = [new TestModel(0,"web1","desc1"),new TestModel(1,"web2","desc2")];
public WebsiteName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.WebsiteName = navParams.get("websiteName")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsitePage');
  }
  showDetailsPage(index:int) {
	  for(var i = 0; i < this.TestList.length; i++){
		 if(i == index){
			 this.navCtrl.push(TestdetailsPage,{"testName":this.TestList[i].name, "testDesc":this.TestList[i].description});
	  }
	  }
    
}

}
