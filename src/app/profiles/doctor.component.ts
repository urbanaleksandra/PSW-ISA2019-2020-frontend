import { Component } from "@angular/core";
import { User } from '../model/User';
import { Doctor } from '../model/Doctor';
import { PatientService } from '../service/patient.service';

@Component({
  templateUrl: './doctor.component.html',
  styleUrls: ['./clinic-center-administrator.component.css']
})

export class DoctorComponent {
  user: User = new User();
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  doctor: Doctor = new Doctor();
  newDoctor: Doctor = new Doctor();
  constructor(private doctorService: PatientService) { }

  ngOnInit() {
    this.getDoctor();

  }

  private isButtonVisible = false;

  private isButtonVisible2 = false;

  getDoctor() {
    this.user.username = sessionStorage.getItem("authenticatedUser");
    this.doctorService.getDoctor(this.user.username).subscribe(
      data => {
        this.doctor = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  change(isButtonVisible: boolean) {
    if (this.isButtonVisible == false)
      this.isButtonVisible = true;
    else this.isButtonVisible = false;
  }

  change2(isButtonVisible2: boolean) {

    if (this.isButtonVisible2 == false)
      this.isButtonVisible2 = true;
    else this.isButtonVisible2 = false;

  }

  submitNewInfo() {
    this.invalidLogin=false;
    this.isButtonVisible2 = false;
    if (this.newDoctor.password === "") {
      this.newDoctor.password = this.doctor.password;
    } else if (this.newDoctor.oldPassword != this.doctor.password) {
      this.invalidLogin = true;
    }
    if (this.newDoctor.firstName === "") {
      this.newDoctor.firstName = this.doctor.firstName;
    }
    if (this.newDoctor.lastName === "") {
      this.newDoctor.lastName = this.doctor.lastName;

    }
    if (this.newDoctor.city === "") {
      this.newDoctor.city = this.doctor.city;
    }
    if (this.newDoctor.country === "") {

      this.newDoctor.country = this.doctor.country;
    }
    if (this.newDoctor.address === "") {
      this.newDoctor.address = this.doctor.address;
    }
    if (this.newDoctor.mobileNumber === NaN) {
      this.newDoctor.mobileNumber = this.doctor.mobileNumber;
    }
    if (this.newDoctor.email === "") {
      this.newDoctor.email = this.doctor.email;
    }

    this.newDoctor.username = this.doctor.username;

    if (this.invalidLogin == false) {
      location.reload();
      this.doctorService.changeDoctorInfo(this.newDoctor).subscribe()

    }
    
  }
}