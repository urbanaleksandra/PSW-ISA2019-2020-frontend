import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { throwError } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;
  private url: string;
  private access_token = null;

  constructor(private http: HttpClient, private router : Router, private apiService: ApiService) {
    this.url = `http://localhost:8080/findByUsernameAndPassword`;
  }

  authenticationService(username: String, password: String) {
    console.log(username);
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = {
      'username' : username,
      'password' : password
    };

    return this.apiService.post(this.url, JSON.stringify(body), loginHeaders)
    .pipe(
      map((res) => {
      console.log('Login success');
      this.username = username;
      this.password = password;
      //this.access_token = res.access_token;
      console.log(res + 'ok');
      // console.log(res.accessToken); //ako je na serveru u beku dobro return-ovan token, onda je on ovde
      // console.log(this.access_token);
      this.registerSuccessfulLogin(username, password);
    }));
  }

  loginDone(user : User){
    return this.http.post<User>('http://localhost:8080/login', user);
  }
  

  // createBasicAuthToken(username: String, password: String) {
  //   return 'Basic ' + window.btoa(username + ":" + password)
  // }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }
}