import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {
public chartWidth: any;
public chartHeight: any;
public lineChartData:Array<any> = [
{data: [2,3,2,6,1,0,9,2], label: 'Failed tests'}
];
public lineChartLabels:Array<any> = ['Monday', 'Thusday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'];
public lineChartOptions:any = {
responsive: true, maintainAspectRatio: false};
public lineChartColors:Array<any> = [
{ // grey
	backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
}];

public lineChartLegend:boolean = true;
public lineChartType:string = 'line';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
  constructor(public navCtrl: NavController, platform: Platform) {
      platform.ready().then((readySource) => {
        this.chartWidth = platform.width() - 40;
        this.chartHeight = platform.height() - 200;
        console.log("height " + platform.height());
      })
  }

}
