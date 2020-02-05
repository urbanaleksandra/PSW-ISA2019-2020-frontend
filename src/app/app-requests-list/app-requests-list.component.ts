import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/requests.service';
import { Appointment } from '../model/Appointment';
import { User } from '../model/User';
import { MatTableDataSource } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HospitalRoom } from '../model/HospitalRoom';
import { AvailableRoom } from '../model/AvailableRoom';
import { SurgeryRoomService } from '../service/surgery-room.service';
import { RequestAppointmentService } from '../service/requestAppointment.service';

@Component({
  selector: 'app-app-requests-list',
  templateUrl: './app-requests-list.component.html',
  styleUrls: ['./app-requests-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppRequestsListComponent implements OnInit {

  user : User= new User();
  reqs: Appointment[] = [];
  dataSource = new MatTableDataSource(this.reqs);
  addRoomClicked = false;
  searchText;
  rooms: HospitalRoom[] = [];
  isButtonVisible=false;
  clickedAppointment: Appointment;
  showMessage: boolean = false;
  availableRoom: AvailableRoom = new AvailableRoom();

  constructor(private requestsService: RequestService,private service: RequestAppointmentService) { }

  ngOnInit() {
    this.getReqs();
  }

  getReqs() {
    this.user.username = sessionStorage.getItem("authenticatedUser");
    this.requestsService.getRequestA().subscribe(
      data => {
        this.reqs = data;
        console.log(this.reqs[0].doctorUsername)
        this.dataSource = new MatTableDataSource(this.reqs);
      }, error => {
        console.log(error);
      }
    )
    }
    columnsToDisplay = ['id', 'date','description','duration','type','patient','doctorUsername'];

    getRooms() {
      this.service.getAllRooms().subscribe(
        data => {
          this.rooms = data;
        }, error => {
          console.log(error);
        }
      )
      }

      addRoom(appointment){
        this.showMessage = false;
        this.addRoomClicked = true;
        this.clickedAppointment = appointment;
      
        this.service.getAvailableRooms(appointment).subscribe(
          data => {
            this.rooms = data;
            console.log(data);
            if(this.rooms.length == 0){
              this.showMessage = true;
              this.service.getAvailableRoomForOtherDate(appointment).subscribe(
                data =>{
                  console.log(data);
                  this.availableRoom = data;
                });
            }
          },error => {
            console.log(error);
          }
        )
      }

      chooseRoom(roomId){
          this.clickedAppointment.roomID=roomId;
          this.service.setRoom(this.clickedAppointment).subscribe(
            data => {
              console.log("added");
              location.reload();
            }, error => {
              console.log(error);
            }
          )
      }

}
