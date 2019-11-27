import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/Patient';


@Injectable({
    providedIn: 'root'
  })

export class RequestService{

    constructor(private http: HttpClient) { }


    getRequest(){
        return this.http.get<Patient[]>('http://localhost:8080/api/requests');
    }

    deleteRequest(patient: Patient){
        return this.http.post('http://localhost:8080/api/deny-request', patient);

    }

    acceptRequest(patient: Patient){
        return this.http.post('http://localhost:8080/api/accept-request', patient);

    }
}