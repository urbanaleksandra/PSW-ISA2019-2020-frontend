import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarService } from '../service/calendar.service';
import { Appointment } from '../model/Appointment';
import { Observable, of } from 'rxjs';
import { CalendarEvent } from '../model/CalendarEvent';

@Component({
  selector: 'app-root',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  ngOnInit(){
    this.getDates();
    console.log(this.calendarEvents);
  }
  
  title = 'easyfullcalendar';
  calendarPlugins = [dayGridPlugin, timeGridPlugin];
  //calendarEvents:any[] = [{ id: 1, title: 'Saint Jovan', start: '2020-01-20T16:00:00', end: '2020-01-18T17:25:00', color: 'purple'},
    //];
    calendarEvents:any[] = [];

  
  header={
      left: "timeGridDay,timeGridWeek,dayGridMonth",
      center: "title",
      right: "today,prevYear,prev,next,nextYear"
  }
  constructor(private calendarService: CalendarService) { }

  getDates(){
    this.calendarService.getAppointments().subscribe(
      data => {
        this.calendarEvents = data;
        console.log(this.calendarEvents);
      });
  }
         
  
}