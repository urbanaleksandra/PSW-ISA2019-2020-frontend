import { Component, OnInit } from '@angular/core';
import { HospitalRoom } from '../model/HospitalRoom';
import { SurgeryRoomService } from '../service/surgery-room.service';
import { Surgery } from '../model/Surgery';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PopUpDoctorsComponent } from '../pop-up-doctors/pop-up-doctors.component';

@Component({
  selector: 'app-surgery-hospital-room',
  templateUrl: './surgery-hospital-room.component.html',
  styleUrls: ['./surgery-hospital-room.component.css']
})
export class SurgeryHospitalRoomComponent implements OnInit {

  addRoomClicked = false;
  searchText;
  rooms: HospitalRoom[] = [];
  isButtonVisible=false;
  surgeries: Surgery[] = [];
  clickedSurgery: Surgery;
  constructor(private service: SurgeryRoomService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    //this.getRooms();
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

  addRoom(surgery){
    this.addRoomClicked = true;
    this.clickedSurgery = surgery;
    surgery.doctorSurgery = "";
    console.log(surgery);
    this.service.getAvailableRooms(surgery).subscribe(
      data => {
        this.rooms = data;
        console.log(data);
      },error => {
        console.log(error);
      }
    )
  }

  chooseDoctor(room){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.clickedSurgery.roomID = room;
    dialogConfig.data = this.clickedSurgery;
    this.dialog.open(PopUpDoctorsComponent, dialogConfig );
    
  }
}
