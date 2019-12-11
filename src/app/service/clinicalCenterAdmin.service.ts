import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drug } from '../model/Drug';
import { Diagnosis } from '../model/Diagnosis';


@Injectable({
    providedIn: 'root'
})
export class ClinicCenterAdministratorService{

    constructor(private http: HttpClient) { }

    newAdmin(admin: Object){
        console.log(admin);
       
       return this.http.post('http://localhost:8080/api/add-clinic-center-admin', admin);

    }

    newDrug(drug: Drug){
        console.log(drug);
        return this.http.post('http://localhost:8080/api/add-drug', drug);
    }

    newDiagnosis(diagnosis: Diagnosis){
        console.log(diagnosis);
        return this.http.post('http://localhost:8080/api/add-diagnosis', diagnosis);
    }
}