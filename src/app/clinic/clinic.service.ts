import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from './clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getClinic(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createClinic(clinic: Object){
    console.log("nova klinika" +  JSON.stringify(clinic))
    return this.http.post('http://localhost:8080/api/add-clinic', clinic);
  }

  getClinics(){
    return this.http.get<Clinic[]>('http://localhost:8080/api/get-clinics');
  }

}