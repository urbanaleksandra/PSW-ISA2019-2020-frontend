import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/Patient';
import { ActivatedRoute, Params } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css']
})
export class ConfirmAccountComponent implements OnInit {

  usernameUlogovanog: string;
  patient : Patient = new Patient;
  private token: string;

  constructor(private patientService:PatientService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.getPatient();
    //this.confirmAccount();
    //this.confirmAcc();

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params['token']);
      this.token = params['token'];
    });

    this.confirmAcc();
  }

  // getPatient(){
  //   this.usernameUlogovanog = sessionStorage.getItem("authenticatedUser");
  //   this.patientService.getPatient("saska1").subscribe(
  //     data =>{
  //         this.patient=data;
  //     },
  //     error => {
  //     console.log(error);
  //     }
  //    )
  // }
  // confirmAccount(){
  //   console.log(this.patient.firstName);
  //   this.patientService.confirmAccount(this.patient).subscribe((result)=> {
  //     alert("Confirm Account");
  //   });
  // }

  confirmAcc(){
    this.patientService.confirmAccount(this.token).subscribe(
      data =>{
          this.patient=data;
      },
      error => {
      console.log(error);
      }
     )
  }

}
