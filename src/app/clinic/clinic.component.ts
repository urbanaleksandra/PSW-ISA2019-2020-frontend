import { Component, OnInit} from "@angular/core";

import { Router } from '@angular/router';
import { ClinicService } from '../service/clinic.service';
import { ClinicAdministrator } from '../model/ClinicAdministrator';
import { Clinic } from '../model/clinic';
import { ClinicAdministratorService } from '../service/clinicAdministrator.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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

    form = new FormGroup({
        Username: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),
        firstNameCA: new FormControl('', Validators.required),
        lastNameCA: new FormControl('', Validators.required),
        emailCA: new FormControl('', Validators.required),
        addressCA: new FormControl('', Validators.required),
        cityCA: new FormControl('', Validators.required),
        countryCA: new FormControl('', Validators.required),
        mobileNumberCA: new FormControl('', Validators.required),
        jmbgCA: new FormControl('', Validators.required),
      })
      form2 = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
      })
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
             alert("Successfully added!");
          })       
    }

}