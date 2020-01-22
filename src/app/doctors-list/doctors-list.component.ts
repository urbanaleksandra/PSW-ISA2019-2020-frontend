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

  constructor(private clinicService: ClinicService) { }

  ngOnInit() {
    this.imeKlinike = this.clinicService.imeKlinike1;
    this.datumZakazivanja = this.clinicService.datumZakazivanja1;
    console.log(this.imeKlinike);
    console.log(this.datumZakazivanja);
    this.getSearchDoctors();
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



}
