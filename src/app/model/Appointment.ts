import { Doctor } from './Doctor';

export class Appointment {
    id : string="";
    date : string="";
    description : string ="";
    duration: number = 0;
    type : string = "";
    patient : string = "";
    doctorUsername: string=""; 
    start: boolean = false;
    info: string = "";
}