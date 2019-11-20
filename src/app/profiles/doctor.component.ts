import { Component } from "@angular/core";

@Component({
    templateUrl: './doctor.component.html',
    styleUrls: ['./clinic-center-administrator.component.css']
})

export class DoctorComponent{
    

    constructor() { }

    ngOnInit() {
    }
  
    private isButtonVisible = false;

    private isButtonVisible2 = false;

    change(isButtonVisible:boolean){
        this.isButtonVisible = isButtonVisible;
      }

      change2(isButtonVisible2:boolean){
        this.isButtonVisible2 = isButtonVisible2;
      }
}

