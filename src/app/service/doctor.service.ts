import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalRoom } from '../model/HospitalRoom';
import { Doctor } from '../model/Doctor';


@Injectable({
    providedIn: 'root'
  })

export class DoctorService{

    constructor(private http: HttpClient) { }


 /*    deleteRoom(room : HospitalRoom){
      console.log(room.name)

      return this.http.post('http://localhost:8080/delete-room',room);
    }


    modifyRoom(room : HospitalRoom, name: String){
      return this.http.post('http://localhost:8080/changeRoomInfo/'+name ,room);
    } */

    addDoctor(doctor : Doctor){
      console.log(doctor.username)

      return this.http.post<HospitalRoom>('http://localhost:8080/add-doctor', doctor);
    }

    getAllDoctors() {
        return this.http.get<any>('http://localhost:8080/doctors');
      }
}