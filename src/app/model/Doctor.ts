import { Clinic } from './clinic';

export class Doctor{
            id: number;

            username : string = "";
		
            password : string = "";
		
            firstName : string = "";
		
            lastName : string = "";
		
            email : string = "";
		
            address : string = "";
		
            city : string = "";
		
            country : string = "";
		
            mobileNumber : number;

            oldPassword: string ="" ;
		
            jmbg : number;

            review: number;

            rating: number = 0;

            pocetakRadnogVremena: String="";

            krajRadnogVremena:String="";

            clinic: Clinic;


}