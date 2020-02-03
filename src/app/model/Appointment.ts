import { Doctor } from './Doctor';
import { HospitalRoom } from './HospitalRoom';
import { MedicalRecord } from './MedicalRecord';

export class Appointment {
    id : string="";
    date : string="";
    description : string ="";
    duration: number = 0;
    type : string = "";
    patient : string = "";
    doctorUsername: string=""; 
    doctor: Doctor;
    hospitalRoom: HospitalRoom;
    medicalRecord: MedicalRecord;
    start: boolean = false;
    info: string = "";

}