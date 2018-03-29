import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {SimpleChanges} from '@angular/core';
import {TestdetailsPage} from '../testdetails/testdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	private testDataForChart:Array<boolean> = [true, true, true, false, false, true];
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
  }
constructor(public navCtrl: NavController,public http: HttpClient) {
		this.items = [
		{name: 'test1', description: 'desc1', succeed: false, priority: '1'},
		{name: 'test2', description: 'desc2', succeed: false, priority: '2'},
		{name: 'test3', description: 'desc3', succeed: false, priority: '3'}
		];
  }


}
