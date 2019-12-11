import { Component } from "@angular/core";
import { User } from '../model/User';

@Component({
    templateUrl: './doctor.component.html',
    styleUrls: ['./clinic-center-administrator.component.css']
})

export class DoctorComponent{
    user:User=new User() ;
 
    constructor() { }

    ngOnInit() {
      this.user.username = sessionStorage.getItem("authenticatedUser");
      
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

