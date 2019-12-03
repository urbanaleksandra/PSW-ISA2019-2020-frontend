import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ClinicCenterAdministratorService{

    constructor(private http: HttpClient) { }

    newAdmin(admin: Object){
        console.log(admin);
       
       return this.http.post('http://localhost:8080/api/add-clinic-center-admin', admin);

    }
}