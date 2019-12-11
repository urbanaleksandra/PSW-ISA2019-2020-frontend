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

  isButtonVisible=false;
  
  constructor() { }

  ngOnInit() {
    
    
  }

  change(){
    this.isButtonVisible= !this.isButtonVisible;
  }

  

}
