import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }


  register(patient : Patient){
    return this.http.post<any>('http://localhost:9090/api/patients/register', patient)
  }

}