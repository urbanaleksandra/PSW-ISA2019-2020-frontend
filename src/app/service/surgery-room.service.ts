import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurgeryRoomService {

  constructor(private http: HttpClient) { }

  getAllRooms() {
    return this.http.get<any>('http://localhost:8080/sale');
  }

  getSurgeriesService(){
    console.log("usao");
    return this.http.get<any>('http://localhost:8080/api/surgeries-res-rooms/' + sessionStorage.getItem('authenticatedUser'));
  }
}
