import { Component, OnInit } from "@angular/core";
import { RequestService } from '../service/requests.service';
import { Patient } from '../model/Patient';

@Component({
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css' ]  
})

export class RequestComponent implements OnInit{

    requests: Patient[] = [];

    constructor(private service: RequestService){}

    ngOnInit(): void {
        this.getRequest();
    }
    
    getRequest(){
        this.service.getRequest().subscribe(
            data=>{
                this.requests=data;
            }, error =>{
                console.log(error);
            }
        )
    }

    deleteRequests(patient: Patient){
        this.service.deleteRequest(patient).subscribe((result)=> {
            this.getRequest();
          })
    }

    accept(patient: Patient){
        this.service.acceptRequest(patient).subscribe((result)=> {
            this.getRequest();
          })
    }
    
    
}