import { Doctor } from './Doctor';

export class Appointment {
    id : string="0";
    date : string="";
    description : string ="";
    duration: number = 0;
    type : string = "";
    patient : string = "";
    doctorUsername: string=""; 
    start: boolean = false;
}