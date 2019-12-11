import { Component, OnInit } from '@angular/core';
import { HospitalRoom } from '../model/HospitalRoom';
import { hospitalRoomsService } from '../service/hospitalRooms.service';

@Component({
  selector: 'app-hospital-room-search',
  templateUrl: './hospital-room-search.component.html',
  styleUrls: ['./hospital-room-search.component.css']
})
export class HospitalRoomSearchComponent implements OnInit {
  searchText;
  rooms: HospitalRoom[] = [];
  isButtonVisible=false;
  constructor(private service: hospitalRoomsService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.service.getAllRooms().subscribe(
      data => {
        this.rooms = data;
      }, error => {
        console.log(error);
      }
    )
    }
}
