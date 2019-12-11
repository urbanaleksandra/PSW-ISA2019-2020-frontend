import { Component, OnInit } from "@angular/core";

import { Router } from '@angular/router';

import { Clinic } from '../model/clinic';
import { ClinicCenterAdministrator } from '../model/ClinicCenterAdministrator';
import { ClinicCenterAdministratorService } from '../service/clinicalCenterAdmin.service';
import { Drug } from '../model/Drug';
import { Diagnosis } from '../model/Diagnosis';

@Component({
    templateUrl: './clinic-center-administrator.component.html',
    styleUrls: ['./clinic-center-administrator.component.css']
})

export class ClinicCenterAdministratorComponent implements OnInit{
   
    ccadmin: ClinicCenterAdministrator = new ClinicCenterAdministrator();
    clicked = false;
    drug: Drug = new Drug();
    diagnosis: Diagnosis = new Diagnosis();
    clickedDiagnoisis = false;
    clickedDrugs = false;
    constructor(private service: ClinicCenterAdministratorService,
                private router: Router) { }

    ngOnInit(): void {
       
    }

    clickedNewAdminchange(){
        this.clicked = true;
    }
    clickedNewAdmin(){
        this.clicked = false;
        console.log(this.ccadmin);

        this.service.newAdmin(this.ccadmin).subscribe((result)=>{
            console.log("proslo!!!");
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
        this.service.newDrug(this.drug).subscribe((result)=>{console.log("dodao se novi lek")});
        this.drug = new Drug();
    }

    newDiagnosis(){
        this.clickedDiagnoisis = false;
        this.service.newDiagnosis(this.diagnosis);
        this.diagnosis = new Diagnosis();
    }
}