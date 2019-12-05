import { Component, OnInit } from '@angular/core';
import { HolidayRequest } from 'src/app/model/HolidayRequest';

@Component({
  selector: 'app-nurse-home-page',
  templateUrl: './nurse-home-page.component.html',
  styleUrls: ['./nurse-home-page.component.css']
})
export class NurseHomePageComponent implements OnInit {

  isButtonVisible=false;
  holidayRequest:HolidayRequest = new HolidayRequest();
  constructor() { }

  ngOnInit() {
  }

  change(){
    this.isButtonVisible=true;
  }

  sendHolidayRequest(){
    this.isButtonVisible=false;
  }

}
