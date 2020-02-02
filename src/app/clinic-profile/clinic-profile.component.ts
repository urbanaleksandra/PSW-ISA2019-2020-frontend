import { Component, OnInit } from '@angular/core';
import { ClinicCenterAdministratorService } from '../service/clinicalCenterAdmin.service';
import { User } from '../model/User';
import { Clinic } from '../model/clinic';
import { ClinicAdministratorService } from '../service/clinicAdministrator.service';
import { ClinicService } from '../service/clinic.service';

@Component({
  selector: 'app-clinic-profile',
  templateUrl: './clinic-profile.component.html',
  styleUrls: ['./clinic-profile.component.css']
})
export class ClinicProfileComponent implements OnInit {
  user: User = new User();
  constructor(private service: ClinicAdministratorService,private clinicService: ClinicService) { }
  clinic: Clinic = new Clinic();
  name: String = "";
  ngOnInit() {
    this.getMyClinic();
  }

  getMyClinic() {
    this.user.username = sessionStorage.getItem("authenticatedUser");
    this.service.getMyClinic(this.user.username).subscribe(
      data => {
        this.clinic = data;
        this.name = this.clinic.name;
      },
      error => {
        console.log(error);
      }

    )
  }

  modifyClinic(){
    this.clinicService.changeClinicData(this.clinic,this.name).subscribe(
    data => {
      location.reload();
    },
    error => {
      console.log(error);
    }

  )
  }

}
