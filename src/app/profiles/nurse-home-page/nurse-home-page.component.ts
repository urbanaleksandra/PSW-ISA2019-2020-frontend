import { Component, OnInit } from '@angular/core';
import { HolidayRequest } from 'src/app/model/HolidayRequest';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-nurse-home-page',
  templateUrl: './nurse-home-page.component.html',
  styleUrls: ['./nurse-home-page.component.css']
})
export class NurseHomePageComponent implements OnInit {

  date = new Date();
  today = Date.now();
  today2;
  isButtonVisible=false;
  holidayRequest:HolidayRequest = new HolidayRequest();
  minDate = new Date(2019, 11, 5);
  maxDate = new Date(2019, 11, 22);
  jstoday = '';
  ymd: String[] = [];
  year: number;
  month: number;
  day: number;
  yearStartDate: number;
  monthStartDate: number;
  dayStartDate: number;
  constructor() {
    
  }

  ngOnInit() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    this.ymd = this.jstoday.split("-");
    console.log(this.ymd);
    this.year = Number(this.ymd[2]);
    this.month =  Number(this.ymd[1]);
    this.day =  Number(this.ymd[0]);
    
  }

  change(){
    this.isButtonVisible=true;
    
  }

  sendHolidayRequest(){
    this.isButtonVisible=false;
    console.log(this.holidayRequest);
    console.log(this.today);
    
    console.log(this.jstoday);
  }

}
