import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private baseUrl = 'api/clinic/add-clinic';

  constructor(private http: HttpClient) { }

  getClinic(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createClinic(clinic: Object){
    console.log("nova klinika" +  JSON.stringify(clinic))
    return this.http.post(this.baseUrl, clinic);
  }


  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}