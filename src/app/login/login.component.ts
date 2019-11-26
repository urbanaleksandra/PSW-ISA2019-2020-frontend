import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  // username: string;
  // password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  private isVisible = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.user.username, this.user.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      console.log('radi');
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/profileClinicCenterAdmin']);
    }, () => {
      console.log('ne radi');
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.isVisible = false;
    });      
  }

  change(isVisible:boolean){
    this.isVisible = isVisible;
  }

}
