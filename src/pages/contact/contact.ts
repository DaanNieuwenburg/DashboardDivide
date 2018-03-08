import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
public lineChartData:Array<any> = [
{data: [2,3,2,6,1,0,9,2], label: 'Failed tests'}
];
public lineChartLabels:Array<any> = ['Monday', 'Thusday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'];
public lineChartOptions:any = {
responsive: true};
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

/*public randomize():void {
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}*/

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
  constructor(public navCtrl: NavController) {

  }

}
