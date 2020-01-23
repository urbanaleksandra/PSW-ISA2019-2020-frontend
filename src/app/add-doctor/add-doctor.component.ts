import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/Doctor';
import { DoctorService } from '../service/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor: Doctor= new Doctor();
  constructor(private service : DoctorService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.doctor.address);
    this.service.addDoctor(this.doctor).subscribe(
      data=>{
        alert("The doctor has been added.");
        this.router.navigateByUrl("/doctors");
    }, error =>{
        console.log(error);
    }
    );
  }
}
