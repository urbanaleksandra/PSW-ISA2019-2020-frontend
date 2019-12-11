import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class hospitalRoomsService{

    constructor(private http: HttpClient) { }

    getAllRooms() {
        return this.http.get<any>('http://localhost:8080/sale');
      }
}