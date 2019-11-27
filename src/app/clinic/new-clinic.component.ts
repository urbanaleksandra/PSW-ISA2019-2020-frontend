import { Component, OnInit} from "@angular/core";
import { Clinic } from './clinic';
import { Router } from '@angular/router';
import { ClinicService } from '../service/clinic.service';


@Component({
    templateUrl: './new-clinic.component.html',
    styleUrls: ['./clinic.component.css']
})
export class NewClinic implements OnInit{

    clinic: Clinic = new Clinic();
    submitted = false;
    clinics: Clinic[] = [];
    isButtonVisible = false;

    constructor(private clinicService: ClinicService,
        private router: Router) { }
    
    ngOnInit() {
       this.getClinics();
       
    }

    getClinics(){
        this.clinicService.getClinics().subscribe(
            data =>{
                this.clinics=data;
            },
            error => {
            console.log(error);
            }
           )
    }
    

    save() {
        this.clinicService.createClinic(this.clinic)
          .subscribe((result)=> {
            this.getClinics();
          })
          this.clinic = new Clinic();
    }

    onSubmit() {
        console.log("usao")
        this.submitted = true;
        this.save();    
    }
    change(){
        !this.isButtonVisible
      }
}