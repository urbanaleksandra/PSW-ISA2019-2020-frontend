import { Component, OnInit} from "@angular/core";
import { Clinic } from './clinic';
import { Router } from '@angular/router';
import { ClinicService } from './clinic.service';

@Component({
    templateUrl: './new-clinic.component.html',
})
export class NewClinic implements OnInit{

    clinic: Clinic = new Clinic();
    submitted = false;

    constructor(private clinicService: ClinicService,
        private router: Router) { }
    
    ngOnInit() {
    }

    newClinic(): void {
        this.submitted = false;
        this.clinic = new Clinic();
    }

    save() {
        this.clinicService.createClinic(this.clinic)
          .subscribe(data => { this.router.navigate(['/profileClinicCenterAdmin'])});
          console.log(this.clinic.name)
          console.log(this.clinic.description)
        this.clinic = new Clinic();
        
    }

    onSubmit() {
        console.log("usao")
        this.submitted = true;
        this.save();    
    }
}