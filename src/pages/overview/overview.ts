import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import moment from 'moment';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {
public chartWidth: any;
public chartHeight: any;
public lineChartData:Array<any> = [
{data: [0,0,0,0,0,0,0,0], label: 'Failed tests'}
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

private weekNumbers : number[] = [];
private week : any = moment().week();
private startOfWeek;
private endOfWeek;

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
public optionsFn(): void {
    console.log(this.week);
    console.dir("week changed to week: "+this.week);
    this.checkWeek(this.week);
    this.load();
  }

checkWeek(week){
  this.startOfWeek = moment().day("Sunday").week(week).format('YYYY-MM-DD');
  this.endOfWeek = moment().day("Saturday").week(week).format('YYYY-MM-DD');
  console.log("week begin "+ this.startOfWeek);
  console.log("week end "+ this.endOfWeek);
}
ionViewWillEnter(): void {
  this.checkWeek(this.week);
    this.load();
  }
  load(): void {
    var date = this.startOfWeek;
    var i = 0;
    var chartdata : number[] = [];
    this.http
      .get('https://apidivide.azurewebsites.net/api/testrun/'+this.startOfWeek + '/' + this.endOfWeek)
      .subscribe((data: any) => {
        console.dir(data);
        if(data.length > 0){
          while(date <= this.endOfWeek){
            //console.log("loopdate " + date);
            for(let j=0; j<data.length; j++){
            console.log("loopdate " + (moment(date).format('YYYY-MM-DD') + " API date " + moment(data[j].startTime).format('YYYY-MM-DD')));
            if(moment(date).format('YYYY-MM-DD') == moment(data[j].startTime).format('YYYY-MM-DD')){
              console.log("failed " + data[j].failed);
              chartdata[i] =  data[j].failed;
            }
            else{
              chartdata[i] = 0;
            }
          }
            date = moment(date).add('days', 1).format('YYYY-MM-DD');
            i++;
          }
        }else{
          chartdata = [0,0,0,0,0,0,0];
        }

        console.log(chartdata);
        this.lineChartData = chartdata;
      },
      (error: any) => {
        console.dir(error);
      });
  }
  constructor(public navCtrl: NavController, platform: Platform,public http: HttpClient) {
    for(let i = 1; i<53; i++){
      this.weekNumbers[i-1] = i;
    }
      platform.ready().then((readySource) => {
        this.chartWidth = platform.width() - 40;
        this.chartHeight = platform.height() - 200;
        console.log("height " + platform.height());
      })
  }

}
