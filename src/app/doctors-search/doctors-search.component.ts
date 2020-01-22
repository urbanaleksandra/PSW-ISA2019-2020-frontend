import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Doctor } from '../model/Doctor';
import { DoctorService } from '../service/doctor.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-doctors-search',
  templateUrl: './doctors-search.component.html',
  styleUrls: ['./doctors-search.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DoctorsSearchComponent implements OnInit {
  searchText;
  doctors: Doctor[] = [];
  isButtonVisible=false
  constructor(private service: DoctorService) { }
  dataSource = new MatTableDataSource(this.doctors);
  ngOnInit() : void {
    this.getDoctors();
  }

  getDoctors() {
    this.service.getAllDoctors().subscribe(
      data => {
        this.doctors = data;
        this.dataSource = new MatTableDataSource(this.doctors);
      }, error => {
        console.log(error);
      }
    )
    }
    columnsToDisplay = ['username', 'firstName','lastName','city','country','email','mobileNumber','jmbg'];
}
