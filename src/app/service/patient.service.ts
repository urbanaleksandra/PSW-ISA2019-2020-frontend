import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }


  register(patient : Patient){
    console.log(patient.address)
    return this.http.post<Patient>('http://localhost:8080/register', patient)
  }

  getAllPatients() {
    return this.http.get<any>('http://localhost:8080/pacijenti');
  }

}