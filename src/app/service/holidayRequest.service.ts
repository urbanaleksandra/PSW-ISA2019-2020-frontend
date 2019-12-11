import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HolidayRequestString } from '../model/HolidayRequestString';


@Injectable({
  providedIn: 'root'
})
export class HolidayRequestService {

    constructor(private http: HttpClient) { }

    newHolidayRequest(holidayRequestString: HolidayRequestString){
        console.log(holidayRequestString);
       
       return this.http.post('http://localhost:8080/api/holiday-request', holidayRequestString);
    }
}