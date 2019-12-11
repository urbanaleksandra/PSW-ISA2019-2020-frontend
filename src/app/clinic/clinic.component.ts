import { Component, OnInit} from "@angular/core";

import { Router } from '@angular/router';
import { ClinicService } from '../service/clinic.service';
import { ClinicAdministrator } from '../model/ClinicAdministrator';
import { Clinic } from '../model/clinic';
import { ClinicAdministratorService } from '../service/clinicAdministrator.service';


@Component({
    templateUrl: './clinic.component.html',
    styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit{

    clinic: Clinic = new Clinic();
    submitted = false;
    clinics: Clinic[] = [];
    isButtonVisible = false;
    clinicAdministrator: ClinicAdministrator = new ClinicAdministrator();
    clickedClinic = "";
    clinicToAddNewAdmin: Clinic = new Clinic();
    addAdminClicked = false;

    constructor(private clinicService: ClinicService,
                private adminService: ClinicAdministratorService,
                private router: Router) { }
    
    ngOnInit() {
       this.getClinics();
       
    }

    getClinics(){
        this.clinicService.getClinics().subscribe(
            data =>{
                this.clinics=data;
            },
            error => {
            console.log(error);
            }
           )
    }
    

    save() {
        this.clinicService.createClinic(this.clinic)
          .subscribe((result)=> {
            this.getClinics();
          })
          this.clinic = new Clinic();
    }

    onSubmit() {
        console.log("usao")
        this.submitted = true;
        this.save();    
    }
    change(){
        !this.isButtonVisible
    }

    addAdminForm(clinic: Clinic){
        this.clinicToAddNewAdmin = clinic;
        this.addAdminClicked = true;
    }
    onSubmitAdmin() {
        console.log(this.clinicAdministrator);
        this.addAdminClicked = false;
        this.adminService.newAdmin(this.clinicAdministrator, this.clinicToAddNewAdmin.id)
         .subscribe((result)=>{
             console.log("proslo!!!");
          })       
    }

}