import { Component, OnInit } from '@angular/core';
import { HolidayRequest } from '../model/HolidayRequest';


@Component({
  selector: 'app-doktor-home-page',
  templateUrl: './doktor-home-page.component.html',
  styleUrls: ['./clinic-center-administrator.component.css']
})
export class DoktorHomePageComponent implements OnInit {
  isButtonVisible=false;
  holidayRequest:HolidayRequest = new HolidayRequest();
  constructor() { }

  ngOnInit() {
  }
  change(){
    if(this.isButtonVisible==false)
    this.isButtonVisible=true;
    else this.isButtonVisible=false;
  }

  sendHolidayRequest(){
    this.isButtonVisible=false;
  }

}
