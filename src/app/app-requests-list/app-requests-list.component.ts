import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/requests.service';
import { Appointment } from '../model/Appointment';
import { User } from '../model/User';
import { MatTableDataSource } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HospitalRoom } from '../model/HospitalRoom';
import { AvailableRoom } from '../model/AvailableRoom';
import { SurgeryRoomService } from '../service/surgery-room.service';
import { RequestAppointmentService } from '../service/requestAppointment.service';
import { Router } from '@angular/router';

declare var ol: any;

/*
ol.Control.Click = ol.Class(ol.Control, {                
  defaultHandlerOptions: {
      'single': true,
      'double': false,
      'pixelTolerance': 0,
      'stopSingle': false,
      'stopDouble': false
  },

  initialize: function(options) {
      this.handlerOptions = ol.Util.extend(
          {}, this.defaultHandlerOptions
      );
      ol.Control.prototype.initialize.apply(
          this, arguments
      ); 
      this.handler = new ol.Handler.Click(
          this, {
              'click': this.trigger
          }, this.handlerOptions
      );
  }, 

  trigger: function(e) {
      var lonlat = map.getLonLatFromViewPortPx(e.xy);
      alert("You clicked near " + lonlat.lat + " N, " +
                                + lonlat.lon + " E");
  }

});*/
@Component({
  selector: 'app-app-requests-list',
  templateUrl: './app-requests-list.component.html',
  styleUrls: ['./app-requests-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppRequestsListComponent implements OnInit {
  user : User= new User();
  reqs: Appointment[] = [];
  dataSource = new MatTableDataSource(this.reqs);
  addRoomClicked = false;
  searchText;
  rooms: HospitalRoom[] = [];
  isButtonVisible=false;
  clickedAppointment: Appointment;
  showMessage: boolean = false;
  availableRoom: AvailableRoom = new AvailableRoom();
  

  latitude: number =18.11041262280196;
  longitude: number = 43.259405942773384;
   map: any;
  
  constructor(private router: Router,private requestsService: RequestService,private service: RequestAppointmentService) { }

  ngOnInit() {
    this.getReqs();
    this.map = new ol.Map({ 
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.latitude, this.longitude]),
        zoom: 8
      })
    });
    this.map.on('click', function(evt){
      console.log(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
      
  });
  this.reverseGeocode([this.latitude,this.longitude]);
  }

  getReqs() {
    this.user.username = sessionStorage.getItem("authenticatedUser");
    this.requestsService.getRequestA2().subscribe(
      data => {
        this.reqs = data;
        console.log(this.reqs[0].doctorUsername)
        this.dataSource = new MatTableDataSource(this.reqs);
      }, error => {
        console.log(error);
      }
    )
    }
    columnsToDisplay = ['id', 'date','description','duration','type','patient','doctorUsername'];

    getRooms() {
      this.service.getAllRooms().subscribe(
        data => {
          this.rooms = data;
        }, error => {
          console.log(error);
        }
      )
      }

      addRoom(appointment){
        this.showMessage = false;
        this.addRoomClicked = true;
        this.clickedAppointment = appointment;
      
        this.service.getAvailableRooms(appointment).subscribe(
          data => {
            this.rooms = data;
            console.log(data);
            if(this.rooms.length == 0){
              this.showMessage = true;
              this.service.getAvailableRoomForOtherDate(appointment).subscribe(
                data =>{
                  console.log(data);
                  this.availableRoom = data;
                });
            }
          },error => {
            console.log(error);
          
          }
        )
      }

      chooseRoom(roomId){
          this.clickedAppointment.roomID=roomId;
          this.service.setRoom(this.clickedAppointment).subscribe(
            data => {
              console.log("added");
              location.reload();
            }, error => {
              console.log(error);
              alert('Please wait,data is currently being used by another administrator.');
              location.reload(); 
            }
          )
      }
      
      reverseGeocode(coords) {
        fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + coords[0] + '&lat=' + coords[1])
          .then(function(response) {
                 return response.json();
             }).then(function(json) {
               
                 console.log(json);
             });
     }
      
}
