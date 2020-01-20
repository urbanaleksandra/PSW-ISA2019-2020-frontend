import { Component, OnInit } from '@angular/core';
import { HospitalRoom } from '../model/HospitalRoom';
import { hospitalRoomsService } from '../service/hospitalRooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css']
})
export class NewRoomComponent implements OnInit {

  room: HospitalRoom = new HospitalRoom();
  constructor(private service : hospitalRoomsService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    this.service.addRoom(this.room).subscribe(
      data=>{
        alert("The room has been added.");
        this.router.navigateByUrl("/find-room");
    }, error =>{
        console.log(error);
    }
    );
  }

}
