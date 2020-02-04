import { Component, OnInit } from "@angular/core";

import { Router } from '@angular/router';

import { Clinic } from '../model/clinic';
import { ClinicCenterAdministrator } from '../model/ClinicCenterAdministrator';
import { ClinicCenterAdministratorService } from '../service/clinicalCenterAdmin.service';
import { Drug } from '../model/Drug';
import { Diagnosis } from '../model/Diagnosis';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './clinic-center-administrator.component.html',
    styleUrls: ['./clinic-center-administrator.component.css']
})

export class ClinicCenterAdministratorComponent implements OnInit{
    loginCCAdmin : ClinicCenterAdministrator = new ClinicCenterAdministrator();
    ccadmin: ClinicCenterAdministrator = new ClinicCenterAdministrator();
    clicked = false;
    drug: Drug = new Drug();
    diagnosis: Diagnosis = new Diagnosis();
    clickedDiagnoisis = false;
    clickedDrugs = false;
    paswordFormVisible :boolean = false;
    pageVisible : boolean = true;
    newPassword : String = "";
    form = new FormGroup({
        newPassword: new FormControl('', Validators.required)
        
      })
    constructor(private service: ClinicCenterAdministratorService,
                private router: Router) { }

    ngOnInit(): void {
       this. getClinicCenterAdmin();
    }

    clickedNewAdminchange(){
        this.clicked = true;
    }
    clickedNewAdmin(){
        this.clicked = false;
        console.log(this.ccadmin);

        this.service.newAdmin(this.ccadmin).subscribe((result)=>{
            alert("Successfully added!");
        }) 
        this.ccadmin = new ClinicCenterAdministrator();
    }
    clickednewDrug(){
        this.clickedDrugs = true;
    }
    clickednewDiagnosis(){
        this.clickedDiagnoisis = true;
    }
    newDrug(){
        this.clickedDrugs = false;
        this.service.newDrug(this.drug).subscribe((result)=>{ alert("Successfully added!");});
        this.drug = new Drug();
    }

    newDiagnosis(){
        this.clickedDiagnoisis = false;
        this.service.newDiagnosis(this.diagnosis).subscribe((result)=>{ alert("Successfully added!");});
        this.diagnosis = new Diagnosis();
    }

    getClinicCenterAdmin(){
        let user = sessionStorage.getItem("authenticatedUser");
        this.service.getLoginAdmin(user).subscribe(
            data =>{
                this.loginCCAdmin = data;
                if(this.loginCCAdmin.firstLog == 0){
                    this.paswordFormVisible = true;
                    this.pageVisible = false;
                }
                else
                    this.pageVisible =  true;
            });
    }

    onSubmit(){
        this.service.setNewPassword(this.newPassword, sessionStorage.getItem("authenticatedUser")).subscribe(
            data =>{
                    this.paswordFormVisible = false;
                    this.pageVisible = true;
                    this.loginCCAdmin = data;
                    
        }, error =>{
            alert('error');
        });
    }
}