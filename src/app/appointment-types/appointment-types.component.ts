import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppointmentType } from '../model/AppointmentType';
import { AppTypeService } from '../service/appType.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-appointment-types',
  templateUrl: './appointment-types.component.html',
  styleUrls: ['./appointment-types.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppointmentTypesComponent implements OnInit {
  searchText;
  types: AppointmentType[] = [];
  newType: AppointmentType = new AppointmentType();
  isButtonVisible=false;
  dataSource = new MatTableDataSource(this.types);
  columnsToDisplay = ['name'];

  constructor(private service: AppTypeService) { }

  ngOnInit() : void {
    this.getTypes();
  }

  getTypes() {
    this.service.getAllTypes().subscribe(
      data => {
        this.types = data;
        this.dataSource = new MatTableDataSource(this.types);
      }, error => {
        console.log(error);
      }
    )
    }

    addType() {

      this.service.addType(this.newType).subscribe(
        data=>{
          alert("The type has been added.");
          location.reload();
      }, error =>{
          console.log(error);
      }
      );
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
