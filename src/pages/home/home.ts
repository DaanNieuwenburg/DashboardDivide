import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TestdetailsPage} from '../testdetails/testdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private testDataForChart:bool[] = [true,true,true,false,true,true,false,true,false,true];
	private failedtests:int = 0;
	private succestests:int = 0;
// Doughnut
doughnutChartLabels:string[] = ['Failed tests', 'Succeed Tests'];
public doughnutChartData:number[] = [this.failedtests, this.succestests];
public doughnutChartType:string = 'doughnut';

// events
/*ionViewDidLoad() {
    this.checkTests();
  }*/
checkTests(){
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
showDetailsPage() {
	this.navCtrl.push(TestdetailsPage, {"testName":"test 1", "testDescription":"Desc 1"});
}
constructor(public navCtrl: NavController) {
		this.checkTests();
  }
  

}
