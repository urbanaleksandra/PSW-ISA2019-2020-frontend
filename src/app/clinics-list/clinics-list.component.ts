import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../service/clinic.service';
import { Router } from '@angular/router';
import { Clinic } from '../model/clinic';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css']
})
export class ClinicsListComponent implements OnInit {

  clinic: Clinic = new Clinic();
  clinics: Clinic[] = [];

  constructor(private clinicService: ClinicService,
    private router: Router) { }

  ngOnInit() {
    this.getClinics();
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

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
