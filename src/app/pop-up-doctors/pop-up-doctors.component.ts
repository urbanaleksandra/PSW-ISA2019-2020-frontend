import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-doctors',
  templateUrl: './pop-up-doctors.component.html',
  styleUrls: ['./pop-up-doctors.component.css']
})
export class PopUpDoctorsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUpDoctorsComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(){
      this.onClose();
  }

  onClose(){
    this.dialogRef.close();
  }

}
