import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/Doctor';
import { DoctorService } from '../service/doctor.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  user: User = new User();
  doctor: Doctor = new Doctor();
  constructor(private service: DoctorService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.doctor.address);
    this.user.username = sessionStorage.getItem("authenticatedUser");
    this.service.addDoctor(this.doctor,this.user.username).subscribe(
      data => {
        alert("The doctor has been added.");
        this.router.navigateByUrl("/doctors");
      }, error => {
        console.log(error);
      }
    );
  }
}
