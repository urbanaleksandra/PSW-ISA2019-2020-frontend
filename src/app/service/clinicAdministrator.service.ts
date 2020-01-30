import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClinicAdministrator } from '../model/ClinicAdministrator';

@Injectable({
    providedIn: 'root'
})
export class ClinicAdministratorService{

    constructor(private http: HttpClient) { }

    newAdmin(admin: Object, id: number){
        console.log(admin);
       
       return this.http.post('http://localhost:8080/api/add-admin/' + id, admin);
    }
    
  getCadmin(username : string){
    return this.http.get<ClinicAdministrator>('http://localhost:8080/cadmin/'+username);
  }

  changeAdminInfo(admin : ClinicAdministrator){
    return this.http.post<ClinicAdministrator>('http://localhost:8080/adminChangeInfo', admin)
  }
}