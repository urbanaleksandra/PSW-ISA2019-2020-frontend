import { Component } from '@angular/core';
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
    AppComponent
    // other components of yours
  ],
  bootstrap: [ AppComponent ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
}
