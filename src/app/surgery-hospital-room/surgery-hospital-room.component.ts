import { Component, OnInit } from '@angular/core';
import { HospitalRoom } from '../model/HospitalRoom';
import { hospitalRoomsService } from '../service/hospitalRooms.service';
import { SurgeryRoomService } from '../service/surgery-room.service';
import { Surgery } from '../model/Surgery';

@Component({
  selector: 'app-surgery-hospital-room',
  templateUrl: './surgery-hospital-room.component.html',
  styleUrls: ['./surgery-hospital-room.component.css']
})
export class SurgeryHospitalRoomComponent implements OnInit {

  searchText;
  rooms: HospitalRoom[] = [];
  isButtonVisible=false;
  surgeries: Surgery[] = [];
  constructor(private service: SurgeryRoomService) { }

  ngOnInit(): void {
    this.getRooms();
    this.getSurgeries();
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

  getSurgeries(){
    this.service.getSurgeriesService().subscribe(
      data => {
        this.surgeries = data;
      },error => {
        console.log(error);
      }
    );
  }

}