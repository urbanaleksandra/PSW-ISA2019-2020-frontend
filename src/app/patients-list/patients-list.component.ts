import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient';
import { PatientService } from '../service/patient.service';
import { Sort } from '@angular/material/sort';
export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['../requests/requests.component.css']
})
export class PatientsListComponent implements OnInit {
 
  sortedData: Patient[];

  patients: Patient[] = [];  
  
  constructor(private service: PatientService) {

    this.sortedData = this.patients.slice();
   }
   ngOnInit() : void {
    this.getPatients();
  }

  getPatients(){
    this.service.getAllPatients().subscribe(
        data=>{
            this.patients=data;
        }, error =>{
            console.log(error);
        }
    )

    
}
   sortData(sort: Sort) {
    const data = this.patients.slice();
    if (!sort.active || sort.direction === '') {
      this.patients = data;
      return; 
    }
   
    this.patients = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.username, b.username, isAsc);
        case 'fname': return compare(a.firstName, b.firstName, isAsc);
        case 'lname': return compare(a.lastName, b.lastName, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
        case 'city': return compare(a.city, b.city, isAsc);
        case 'country': return compare(a.country, b.country, isAsc);
        case 'mnumber': return compare(a.mobileNumber, b.mobileNumber, isAsc);
        case 'jmbg': return compare(a.jmbg, b.jmbg, isAsc);
        default: return 0;
      }

 
});
}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}