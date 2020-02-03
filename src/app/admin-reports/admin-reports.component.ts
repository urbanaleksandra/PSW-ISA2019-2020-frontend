import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../model/Doctor';
import { MatTableDataSource } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AppTypeService } from '../service/appType.service';
import { AppointmentType } from '../model/AppointmentType';
import { ClinicAdministratorService } from '../service/clinicAdministrator.service';
import { Appointment } from '../model/Appointment';
import { DatePipe } from '@angular/common';
import { Clinic } from '../model/clinic';
import { User } from '../model/User';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminReportsComponent implements OnInit {
  searchText;
  constructor(private doctorService: DoctorService, private appTypeService: AppTypeService, private adminService: ClinicAdministratorService) { }
  doctors: Doctor[] = [];
  dataSource = new MatTableDataSource(this.doctors);
  appTypes: AppointmentType[] = [];
  appointments: Appointment[] = [];
  types: String[] = [];
  todayHeldByType: number[] = [];
  monthlyHeldByType: number[] = [];
  yearHeldByType: number[] = [];
  isButtonVisible = false;
  today: number = Date.now();
  pipe = new DatePipe('en-US'); // Use your own locale
  myFormattedDate = this.pipe.transform(this.today, 'short');
  myFormattedDate1 = this.myFormattedDate.split(',')[0];
  clinic: Clinic = new Clinic();
  user: User = new User();

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  ChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(172, 51, 51)',
    },
  ];
  ChartColors2: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ' rgb(66, 178, 67)',
    },
  ];


  barChartLabels: String[] = this.types;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [5, 2], label: 'Daily appointment count' }
  ];
  barChartData2: ChartDataSets[] = [
    { data: [5, 2], label: 'Daily appointment count' }
  ];
  barChartData3: ChartDataSets[] = [
    { data: [5, 2], label: 'Daily appointment count' }
  ];
  ngOnInit() {
    this.getDoctors();
    this.getTypes();
    this.getAppointments();
    console.log(this.myFormattedDate1);
    console.log(this.todayHeldByType[0])
    this.barChartData = [
      { data: this.todayHeldByType, label: 'Daily appointment count' }
    ];
    this.getAdmin();
  }

  getDoctors() {
    this.doctorService.getAllDoctors().subscribe(
      data => {
        this.doctors = data;
        this.dataSource = new MatTableDataSource(this.doctors);
      }, error => {
        console.log(error);
      }
    )
  }

  getTypes() {
    this.appTypeService.getAllTypes().subscribe(
      data => {
        this.appTypes = data;
        for (let i = 0; i < this.appTypes.length; i++) {
          this.types.push(this.appTypes[i].name);
          this.todayHeldByType[i] = 0;
          this.monthlyHeldByType[i] = 0;
          this.yearHeldByType[i] = 0;
        }
      }, error => {
        console.log(error);
      }
    )
  }

  getAppointments() {
    this.adminService.getAppointments().subscribe(
      data => {
        this.appointments = data;
        for (let i = 0; i < this.appointments.length; i++) {
          console.log(this.appointments[i].date);
          console.log(this.appointments[i].type2.name);
          let myFormattedDate2 = this.pipe.transform(this.appointments[i].date, 'short');
          myFormattedDate2 = myFormattedDate2.split(',')[0];

          const monthAppointment = myFormattedDate2.split('/')[0];
          const month = this.myFormattedDate1.split('/')[0];

          const yearOfAppointment = myFormattedDate2.split('/')[2];
          const year = this.myFormattedDate1.split('/')[2];

          console.log(yearOfAppointment)
          console.log(year)
          var typeNumber = 0;
          for (let typeNumber = 0; typeNumber < this.appTypes.length; typeNumber++) {
            if (this.appointments[i].type2.name == this.appTypes[typeNumber].name) {
              if (myFormattedDate2 == this.myFormattedDate1) {
                this.todayHeldByType[typeNumber] = this.todayHeldByType[typeNumber] + 1;
              }

              if (monthAppointment == month) {
                this.monthlyHeldByType[typeNumber] = this.monthlyHeldByType[typeNumber] + 1;
              }

              if (yearOfAppointment == year) {
                this.yearHeldByType[typeNumber] = this.yearHeldByType[typeNumber] + 1;
              }

              this.barChartData = [
                { data: this.todayHeldByType, label: 'Daily appointment count' }
              ];
              this.barChartData2 = [
                { data: this.monthlyHeldByType, label: 'Monthly appointment count' }
              ];

              this.barChartData3 = [
                { data: this.yearHeldByType, label: 'Yearly appointment count' }
              ];
              break;
            }
          }


        }
      }, error => {
        console.log(error);
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  columnsToDisplay = ['firstName', 'lastName', 'review'];

  getAdmin() {
    this.user.username = sessionStorage.getItem("authenticatedUser");
    this.adminService.getMyClinic(this.user.username).subscribe(
      data => {
        this.clinic = data;
        console.log("REJTING"+ this.clinic.rating)
      },
      error => {
        console.log(error);
      }

    )
  }




}

