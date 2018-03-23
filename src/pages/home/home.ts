import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TestdetailsPage} from '../testdetails/testdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	private testDataForChart:Array<boolean> = [true, true, true, false, false, true];
	private failedtests:number = 0;
	private succestests:number = 0;
	public items;
// Doughnut
doughnutChartLabels:string[] = ['Failed tests', 'Succeed Tests'];
public doughnutChartData:number[] = [this.failedtests, this.succestests];
public doughnutChartType:string = 'doughnut';

// events
/*ionViewDidLoad() {
    this.checkTests();
  }*/
  
checkTests(){
	// TODO - check items from websites
	for(var i = 0; i < this.testDataForChart.length; i++){
		if(this.testDataForChart[i] == true){
			this.succestests++;
		}else{
			this.failedtests++;
		}
	}
	this.doughnutChartData[0] = this.failedtests;
	this.doughnutChartData[1] = this.succestests;
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
constructor(public navCtrl: NavController) {
		this.checkTests();
		this.items = [
		{name: 'test1', description: 'desc1', succeed: false, priority: '1'},
		{name: 'test2', description: 'desc2', succeed: false, priority: '2'},
		{name: 'test3', description: 'desc3', succeed: false, priority: '3'}
		];
  }
  

}
