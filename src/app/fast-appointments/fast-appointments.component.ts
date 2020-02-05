import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/Appointment';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientService } from '../service/patient.service';
import { RequestAppointmentService } from '../service/requestAppointment.service';
import { Router } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from '../model/Patient';
import { formatDate } from '@angular/common';
import { User } from '../model/User';
import { MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { HospitalRoom } from '../model/HospitalRoom';
import { AvailableRoom } from '../model/AvailableRoom';
import { RequestService } from '../service/requests.service';
import { Clinic } from '../model/clinic';
import { ClinicAdministratorService } from '../service/clinicAdministrator.service';
import { PopUpDoctorsComponent } from '../pop-up-doctors/pop-up-doctors.component';
import { PopUpDoctorsAppointmentComponent } from '../pop-up-doctors-appointment/pop-up-doctors-appointment.component';

@Component({
  selector: 'app-fast-appointments',
  templateUrl: './fast-appointments.component.html',
  styleUrls: ['./fast-appointments.component.css']
})
export class FastAppointmentsComponent implements OnInit {
  appointment: Appointment = new Appointment();
  constructor(public fb: FormBuilder,private service : PatientService,private rAservice: RequestAppointmentService,private dialog: MatDialog,
    private router: Router, private parserFormatter: NgbDateParserFormatter,private adminService : ClinicAdministratorService, private requestsService: RequestService,private Rservice: RequestAppointmentService) { }

  selectedTime: String = '';
  valueTime: any = [
    '10-12h',
    '12-14h',
    '14-16h',
    '16-18h'

  ];
  date1;
  today = Date.now();
  isButtonVisible=false;
  jstoday = '';
  ymd: String[] = [];
  year: number;
  month: number;
  day: number;
  isVisible = true;
  user : User= new User();
  reqs: Appointment[] = [];
  dataSource = new MatTableDataSource(this.reqs);
  addRoomClicked = false;
  searchText;
  rooms: HospitalRoom[] = [];
  clickedAppointment: Appointment;
  showMessage: boolean = false;
  availableRoom: AvailableRoom = new AvailableRoom();
 clinic: Clinic=new Clinic();

  form = new FormGroup({
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
   
  })



  onSubmit() {
    if(this.selectedTime == '10-12h')
    this.appointment.date = this.parserFormatter.format(this.date1) + 'T10:00';
  else  if(this.selectedTime == '12-14h')
    this.appointment.date = this.parserFormatter.format(this.date1) + 'T12:00';
  else  if(this.selectedTime == '14-16h')
    this.appointment.date = this.parserFormatter.format(this.date1) + 'T14:00';
  else 
    this.appointment.date = this.parserFormatter.format(this.date1) + 'T16:00';
  console.log(this.appointment);
    
  this.appointment.duration = 2;

      this.clickedAppointment=this.appointment;
      this.user.username = sessionStorage.getItem("authenticatedUser");
      this.adminService.getMyClinic(this.user.username).subscribe(
        data => {
          this.clinic=data;
          console.log(this.clinic);
          this.clickedAppointment.clinic=this.clinic;
          console.log(this.clickedAppointment.clinic);
      this.rAservice.addrequestAppointmentF(this.appointment).subscribe(
        data=>{
          this.appointment=data;
          console.log(data);
          this.addRoom(this.appointment);
      }, error =>{
          console.log(error);
      }
      );
        }, error =>{
          console.log(error);
      }
      );
  }
  ngOnInit() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    this.ymd = this.jstoday.split("-");
    this.year = Number(this.ymd[2]);
    this.month =  Number(this.ymd[1]);
    this.day =  Number(this.ymd[0]);

  }

addRoom(appointment){
  this.showMessage = false;
  this.addRoomClicked = true;
  this.clickedAppointment = appointment;

      this.Rservice.getAvailableRooms(this.clickedAppointment).subscribe(
        data => {
          this.rooms = data;
          console.log(data);
          if(this.rooms.length == 0){
            this.showMessage = true;
            this.Rservice.getAvailableRoomForOtherDate(this.clickedAppointment).subscribe(
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
    this.Rservice.setRoom(this.clickedAppointment).subscribe(
      data => {
        console.log("added");
        location.reload();
      }, error => {
        console.log(error);
      }
    )
}


inputChangeHandler (event: any) {

  this.selectedTime = event.target.value;
}

chooseDoctor(room){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.clickedAppointment.roomID = room;
  dialogConfig.data = this.clickedAppointment;
  console.log(this.clickedAppointment.roomID)
  this.dialog.open(PopUpDoctorsAppointmentComponent, dialogConfig );
  
}
chooseDoctor2(room){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.clickedAppointment.roomID = room;
  this.clickedAppointment.date = this.availableRoom.date;
  dialogConfig.data = this.clickedAppointment;
  console.log(this.clickedAppointment.roomID)
  this.dialog.open(PopUpDoctorsAppointmentComponent, dialogConfig );
  
}

}