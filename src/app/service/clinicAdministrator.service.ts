import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClinicAdministratorService{

    constructor(private http: HttpClient) { }

    newAdmin(admin: Object, id: number){
        console.log(admin);
       
       return this.http.post('http://localhost:8080/api/add-admin/' + id, admin);
    }
}