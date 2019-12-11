import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-root',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  
  title = 'easyfullcalendar';
  calendarPlugins = [dayGridPlugin, timeGridPlugin];

      header={
          left: "timeGridWeek,timeGridDay",
          center: "title",
          right: "today, prevYear, prev, next, nextYear"
      }

      
    ngOnInit(){
       
   }
   handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }
}