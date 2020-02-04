import { Doctor } from './Doctor';
import { AppointmentType } from './AppointmentType';

export class Appointment {
    id : string="0";
    date : string="";
    description : string ="";
    duration: number = 0;
    type : string = "";
    patient : string = "";
    doctorUsername: string=""; 
    start: boolean = false;
    info: string = "";
    type2: AppointmentType=new AppointmentType();
    roomID: number = 0;
    doctor: Doctor=new Doctor();
}