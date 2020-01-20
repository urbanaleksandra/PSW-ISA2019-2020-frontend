import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../service/clinic.service';
import { Router } from '@angular/router';
import { Clinic } from '../model/clinic';
import { Sort } from '@angular/material/sort';
import { Appointment } from '../model/Appointment';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css']
})
export class ClinicsListComponent implements OnInit {

  clinic: Clinic = new Clinic();
  clinic1: Clinic = new Clinic();
  appointment: Appointment = new Appointment();
  clinics: Clinic[] = [];
  clinics1: Clinic[] = [];
  flagForSearch: boolean;
  flagForSearchTable: boolean;

  constructor(private clinicService: ClinicService,
    private router: Router) { }

  ngOnInit() {
    this.getClinics();
    this.flagForSearch = false;
    this.flagForSearchTable = false;
  }

  onSubmit(){
    console.log(this.appointment.date);
    if(this.appointment.date == ""){
      this.flagForSearch = true;
      this.flagForSearchTable = false;
    }
    else{
      // ovde odraditi sve za search
      this.flagForSearch = false;
      this.flagForSearchTable = true;
      this.getSearchClinics();
    }
    //console.log(this.appointment.type);
  }

  getClinics(){
    this.clinicService.getClinics().subscribe(
        data =>{
            this.clinics=data;
        },
        error => {
        console.log(error);
        }
       )
  }

  getSearchClinics(){
    this.clinicService.getSearchClinics(this.appointment.date).subscribe(
        data =>{
            this.clinics1=data;
        },
        error => {
        console.log(error);
        }
       )
  }

  sortData(sort: Sort) {
    const data = this.clinics.slice();
    if (!sort.active || sort.direction === '') {
      this.clinics = data;
      return; 
    }
   
    this.clinics = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'pricelist': return compare(a.pricelist, b.pricelist, isAsc);
        case 'profit': return compare(a.profit, b.profit, isAsc);
        case 'id': return compare(a.id, b.id, isAsc);
        default: return 0;
      }

 
      });
    }

    sortData1(sort: Sort) {
      const data = this.clinics1.slice();
      if (!sort.active || sort.direction === '') {
        this.clinics1 = data;
        return; 
      }
     
      this.clinics1 = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name': return compare(a.name, b.name, isAsc);
          case 'address': return compare(a.address, b.address, isAsc);
          case 'description': return compare(a.description, b.description, isAsc);
          case 'pricelist': return compare(a.pricelist, b.pricelist, isAsc);
          case 'profit': return compare(a.profit, b.profit, isAsc);
          case 'id': return compare(a.id, b.id, isAsc);
          default: return 0;
        }
  
   
        });
      }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
