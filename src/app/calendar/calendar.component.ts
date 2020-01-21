import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
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
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
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

  handleDateClick(arg) { // handler method
    console.log("usao");
    alert(arg.dateStr);
  }
         
  
}