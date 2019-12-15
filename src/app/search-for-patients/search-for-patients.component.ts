import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient';
import { PatientService } from '../service/patient.service';
import { Appointment } from '../model/Appointment';
import { Surgery } from '../model/Surgery';
import { MedicalRecordService } from '../service/medicalRecord.service';

@Component({
  selector: 'app-search-for-patients',
  templateUrl: './search-for-patients.component.html',
  styleUrls: ['./search-for-patients.component.css']
})
export class SearchForPatientsComponent implements OnInit {
  searchText;
  patients: Patient[] = [];
  selectedPatient : Patient=new Patient;
  isButtonVisible=false;
  isButtonVisible2=false;
  appointments : Appointment[] = [];
  appointments1 : Appointment[] = [];
  appointment : Appointment;


  surgeries : Surgery[] = [];
  surgeries1 : Surgery[] = [];
  surgery : Surgery;


  constructor(private service: PatientService,private serviceMD: MedicalRecordService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.service.getAllPatients().subscribe(
      data => {
        this.patients = data;
      }, error => {
        console.log(error);
      }
    )

  }

  change( patient: Patient) {
    this.selectedPatient=patient;
    this.getAppointments(patient.username);
    this.getSurgeries(patient.username);
     if (this.isButtonVisible == false)
      this.isButtonVisible = true;
    else this.isButtonVisible = false; 
    this.isButtonVisible2=false; 
  }

  viewMedRecord(){
    if (this.isButtonVisible2 == false)
    this.isButtonVisible2 = true;
  else this.isButtonVisible2 = false; 
  }
  getAppointments(username : String){
    this.serviceMD.getAppointments(username).subscribe(
      data=>{
        this.appointments=data;
        for(let a of this.appointments){
          console.log(a.patient);
          if(a.patient === username){
            this.appointments1.push(a);
          }
        }
      }, error =>{
        console.log(error);
      }
    );
  }

  getSurgeries(username : String){
    this.serviceMD.getSurgeries(username).subscribe(
      data=>{
        this.surgeries=data;
        for(let a of this.surgeries){
          console.log(a.patient);
          if(a.patient === username){
            this.surgeries1.push(a);
          }
        }
      }, error =>{
        console.log(error);
      }
    );
  }

}
