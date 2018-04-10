import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {TestdetailsPage} from '../testdetails/testdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	failedtests:number;
	succestests:number;
	inconclusive:number;
	skipped:number;
	public items;
// Doughnut
doughnutChartLabels:string[] = ['Failed tests', 'Succeed Tests', 'Inconclusive Tests','Skipped'];
public doughnutChartData: Array<number> = [] = [this.failedtests, this.succestests, this.inconclusive, this.skipped];
public doughnutChartType:string = 'doughnut';

//this class is nessesary to view the chart
//(without it wont refresh and will disable the values)
addDataToChart(){
  var data = [this.failedtests, this.succestests,this.inconclusive,this.skipped];
  this.doughnutChartData = data;
}

public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

// Navigate to test details page
showDetailsPage(item) {
	this.navCtrl.push(TestdetailsPage, {item: item});
}
ionViewWillEnter(): void {
    this.load();
  }
  load(): void {
    this.http
      .get('https://apidivide.azurewebsites.net/api/website/circledata')
      .subscribe((data: any) => {
        console.dir(data);
        this.succestests = data.passed;
        console.dir(data.passed);
		this.failedtests = data.failed;
		this.inconclusive = data.inconclusive;
		this.skipped = data.skipped;
    this.addDataToChart();
      },
      (error: any) => {
        console.dir(error);
      });
    this.http
    .get("https://apidivide.azurewebsites.net/api/testcase/getfailedoflasttestrun?SortBy=priority&amountofrecords=3")
    .subscribe((data: any) => {
      console.dir(data);
      this.items = data;
    },
    (error: any) => {
      console.dir(error);
    });
  }
constructor(public navCtrl: NavController,public http: HttpClient) {
		
  }


}
