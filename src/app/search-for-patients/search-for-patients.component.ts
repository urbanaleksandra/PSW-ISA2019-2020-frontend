import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-search-for-patients',
  templateUrl: './search-for-patients.component.html',
  styleUrls: ['./search-for-patients.component.css']
})
export class SearchForPatientsComponent implements OnInit {
  searchText;
  patients: Patient[] = [];
  
  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.service.getAllPatients().subscribe(
      data => {
        this.patients = data;
      }, error => {
        console.log(error);
      }
    )


  }

}
