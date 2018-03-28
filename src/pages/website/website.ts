import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TestdetailsPage} from '../testdetails/testdetails';

@IonicPage()
@Component({
  selector: 'page-website',
  templateUrl: 'website.html',
})
export class WebsitePage {
public WebsiteName;
public items;
//public items: Array<any> = []; // to store returned data
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.WebsiteName = navParams.get("site").name;
  }

  ionViewDidLoad() {
	  // Remove when data is received from API
	  this.items = [
		{name: 'test 1', description: 'description 1', succeed: true, priority: '1'},
		{name: 'test 2', description: 'description 2', succeed: false, priority: '2'},
		{name: 'test 3', description: 'description 3', succeed: false, priority: '3'}
		];
    console.log('ionViewDidLoad WebsitePage');
  }
  showDetailsPage(item) {
			 this.navCtrl.push(TestdetailsPage, {item: item});
  }
  /*ionViewWillEnter(): void {
    this.load();
  }
  load(): void {
    this.http
      .get('https://divideuitestapi.azurewebsites.net/api/website') //TODO CHANGE URL
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;
      },
      (error: any) => {
        console.dir(error);
      });
  }
*/
}
    


