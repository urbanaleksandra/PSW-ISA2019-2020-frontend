import { Component, OnInit, Inject } from '@angular/core';
import { ClinicCenterAdministratorService } from '../service/clinicalCenterAdmin.service';
import { User } from '../model/User';
import { Clinic } from '../model/clinic';
import { ClinicAdministratorService } from '../service/clinicAdministrator.service';
import { ClinicService } from '../service/clinic.service';
import { PriceList } from '../model/PriceList';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogPriceComponent } from '../dialog-price/dialog-price.component';
import { AppointmentType } from '../model/AppointmentType';

export interface DialogData {
  price: number;
  appointmentType: AppointmentType;
  id: number;
}


@Component({
  selector: 'app-clinic-profile',
  templateUrl: './clinic-profile.component.html',
  styleUrls: ['./clinic-profile.component.css']
})
export class ClinicProfileComponent implements OnInit {

  animal: string;


  user: User = new User();
  clinic: Clinic = new Clinic();
  priceList: PriceList[] = [];
  name: String = "";
  constructor(private service: ClinicAdministratorService,private clinicService: ClinicService,public dialog: MatDialog) { }
  dataSource = new MatTableDataSource(this.priceList);

  ngOnInit() {
    this.getMyClinic();
    this.getPrices();
  }

  getMyClinic() {
    this.user.username = sessionStorage.getItem("authenticatedUser");
    this.service.getMyClinic(this.user.username).subscribe(
      data => {
        this.clinic = data;
        this.name = this.clinic.name;
      },
      error => {
        console.log(error);
      }

    )
  }

  modifyClinic(){
    this.clinicService.changeClinicData(this.clinic,this.name).subscribe(
    data => {
      location.reload();
    },
    error => {
      console.log(error);
    }

  )
  }

  getPrices(){
    this.service.getPrices().subscribe(
      data => {
        this.priceList=data;
        console.log(this.priceList[0].id)
        this.dataSource = new MatTableDataSource(this.priceList);
      },
      error => {
        console.log(error);
      }
    )
  }

  openDialog(price): void {
    const dialogRef = this.dialog.open(DialogPriceComponent, {
      width: '250px',
      data: {price: price.price, appointmentType: price.appointmentType, id: price.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  

}

