import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from '../model/clinic';
import { Doctor } from '../model/Doctor';



@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private baseUrl = 'http://localhost:8080/api';
  imeKlinike1: string;
  datumZakazivanja1: string;
  vremeZakazivanja: string;
  doctor: Doctor;
  clinic: Clinic;

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

  getSearchClinics(searchDate: String){
    console.log("USAO U getSearchClinics " + searchDate);
    return this.http.get<Clinic[]>('http://localhost:8080/api/get-search-clinics/'+searchDate);
  }

  getSearchDoctors(searchDate: string, imeKlinike: string){
    return this.http.get<Doctor[]>('http://localhost:8080/api/get-search-doctors/'+searchDate+"/"+imeKlinike);
  }

  setMinTime(username : String){
    return this.http.get<Doctor>('http://localhost:8080/api/minTime/'+username);
  }

  setMaxTime(username : String){
    return this.http.get<Doctor>('http://localhost:8080/api/maxTime/'+username);
  }

  changeClinicData(clinic:Clinic, name: String) {
    return this.http.post('http://localhost:8080/clinicChangeInfo/'+name ,clinic);
  }

}