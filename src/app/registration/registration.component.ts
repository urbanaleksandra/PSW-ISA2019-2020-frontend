import { Component, OnInit } from '@angular/core';
import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,                               
    ReactiveFormsModule                        
  ],
  declarations: [
    RegistrationComponent
    // other components of yours
  ],
  bootstrap: [ RegistrationComponent ]
})

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private isButtonVisible = true;

  change(isButtonVisible:boolean){
    this.isButtonVisible = isButtonVisible;
  }

}
