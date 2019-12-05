import { Component, OnInit } from "@angular/core";

import { Router } from '@angular/router';

import { Clinic } from '../model/clinic';
import { ClinicCenterAdministrator } from '../model/ClinicCenterAdministrator';
import { ClinicCenterAdministratorService } from '../service/clinicalCenterAdmin.service';

@Component({
    templateUrl: './clinic-center-administrator.component.html',
    styleUrls: ['./clinic-center-administrator.component.css']
})

export class ClinicCenterAdministratorComponent implements OnInit{
   
    ccadmin: ClinicCenterAdministrator = new ClinicCenterAdministrator();
    clicked = false;
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
}