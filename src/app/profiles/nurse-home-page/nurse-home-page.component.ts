import { Component, OnInit } from '@angular/core';

import {formatDate } from '@angular/common';
import { NurseService } from 'src/app/service/nurse.service';
import { HolidayRequest } from 'src/app/model/HolidayRequest';
import { HolidayRequestString } from 'src/app/model/HolidayRequestString';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';

@Component({
  selector: 'app-nurse-home-page',
  templateUrl: './nurse-home-page.component.html',
  styleUrls: ['./nurse-home-page.component.css']
})
export class NurseHomePageComponent implements OnInit {

  date1;
  date2;
  today = Date.now();
  isButtonVisible=false;
  holidayRequest:HolidayRequest = new HolidayRequest();
  jstoday = '';
  ymd: String[] = [];
  year: number;
  month: number;
  day: number;
  holidayRequestString: HolidayRequestString = new HolidayRequestString();
  constructor(private service: NurseService,
    private parserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    this.ymd = this.jstoday.split("-");
    this.year = Number(this.ymd[2]);
    this.month =  Number(this.ymd[1]);
    this.day =  Number(this.ymd[0]);
    
  }

  change(){
    this.isButtonVisible=true;
    
  }

  sendHolidayRequest(){
    this.holidayRequestString.dateStart = this.parserFormatter.format(this.date1);
    this.holidayRequestString.dateEnd = this.parserFormatter.format(this.date2);
    console.log(this.holidayRequestString);
    this.isButtonVisible=false;
    this.holidayRequest.username = sessionStorage.getItem("authenticatedUser");
    this.holidayRequestString.username = sessionStorage.getItem("authenticatedUser");
    
    console.log(this.holidayRequestString);
    this.service.newHolidayRequest(this.holidayRequestString).subscribe((result)=>{
      console.log("proslo!!!");
    })
  }

}
