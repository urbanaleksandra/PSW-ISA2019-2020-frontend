import { Component, OnInit, NgModule } from '@angular/core';
import { ClinicService } from '../service/clinic.service';
import { Doctor } from '../model/Doctor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FilterPipe} from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  searchText;
  imeKlinike: string;
  datumZakazivanja: string;
  doctors: Doctor[] = [];
  selectTimeClicked: boolean;
  selectedDoctor: Doctor;
  minVreme: String;
  maxVreme: String;
  myDate = new Date().toJSON("yyyy/MM/dd HH:mm");
  now: string;

  constructor(private clinicService: ClinicService) { }

  ngOnInit() {
    this.imeKlinike = this.clinicService.imeKlinike1;
    this.datumZakazivanja = this.clinicService.datumZakazivanja1;
    console.log(this.imeKlinike);
    console.log(this.datumZakazivanja);
    this.getSearchDoctors();

    

    this.selectTimeClicked = false;
  }


  getSearchDoctors(){
    this.clinicService.getSearchDoctors(this.datumZakazivanja, this.imeKlinike).subscribe(
        data =>{
            this.doctors=data;
        },
        error => {
        console.log(error);
        }
       )
  }

  addTimeForm(doctor:Doctor){
    this.now = this.myDate.split("T")[1].split(":")[0] + ":" + this.myDate.split("T")[1].split(":")[1];
    console.log(this.now);
    this.selectTimeClicked = true;
    this.selectedDoctor = doctor;


    this.minVreme = this.selectedDoctor.pocetakRadnogVremena;
    this.maxVreme = this.selectedDoctor.krajRadnogVremena;
    console.log(this.minVreme);
    console.log(this.maxVreme);
  }

  redirectToNewAppointment(){
    this.clinicService.imeKlinike1 = this.imeKlinike;
    this.clinicService.datumZakazivanja1 = this.datumZakazivanja;
    this.clinicService.vremeZakazivanja = this.now;
    this.clinicService.doctor = this.selectedDoctor;

  }

 

}
