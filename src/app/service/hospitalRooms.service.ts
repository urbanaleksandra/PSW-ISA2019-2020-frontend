import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalRoom } from '../model/HospitalRoom';


@Injectable({
    providedIn: 'root'
  })

export class hospitalRoomsService{

    constructor(private http: HttpClient) { }


    deleteRoom(room : HospitalRoom){
      console.log(room.name)

      return this.http.post('http://localhost:8080/delete-room',room);
    }


    modifyRoom(room : HospitalRoom, name: String){
      return this.http.post('http://localhost:8080/changeRoomInfo/'+name ,room);
    }

    addRoom(room : HospitalRoom){
      console.log(room.name+room.room_number)

      return this.http.post<HospitalRoom>('http://localhost:8080/add-room', room);
    }

    getAllRooms() {
        return this.http.get<any>('http://localhost:8080/sale');
      }
}