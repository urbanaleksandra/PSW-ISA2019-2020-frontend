import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material'
import { Inject } from '@angular/core';
import { SurgeryRoomService } from '../service/surgery-room.service';

@Component({
  selector: 'app-pop-up-doctors',
  templateUrl: './pop-up-doctors.component.html',
  styleUrls: ['./pop-up-doctors.component.css']
})
export class PopUpDoctorsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUpDoctorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: SurgeryRoomService) { }

  ngOnInit() {
    console.log(this.data);
    this.findAvailableDoctors();
  }

  onSubmit(){
      this.onClose();
  }

  onClose(){
    this.dialogRef.close();
  }

  findAvailableDoctors(){
    this.service.getAvailableDoctors(this.data).subscribe(
      data =>{
        console.log(data);
    });
  }

}
