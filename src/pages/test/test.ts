import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {TestdetailsPage} from '../testdetails/testdetails';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
public WebsiteName;
private websiteId;
private testRunId;
public items;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.websiteId = navParams.get("website");
    this.testRunId = navParams.get("item").id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsitePage');
  }
  // Push to details page
  showDetailsPage(item) {
			 this.navCtrl.push(TestdetailsPage, {item: item});
  }
  // Triggers API call
  ionViewWillEnter(): void {
    this.load();
  }
  // Searchbar event
  getItems(ev: any) {
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
    if(serVal.length == 0){
      this.load();
    }
  }
  // Sort event (failed first, passed second)
  strDesc(a, b) {
   if (a.result.id>b.result.id) return -1;
   else if (a.result.id<b.result.id) return 1;
   else return 0;
 }
  load(): void {
    this.http
      .get('http://apidivide.azurewebsites.net/api/testcase/'+this.websiteId+"/"+this.testRunId) //TODO CHANGE URL
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;
        this.items.sort(this.strDesc);
      },
      (error: any) => {
        console.dir(error);
      });
  }
}
