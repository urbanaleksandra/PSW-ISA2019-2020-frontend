import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { AppointmentReportService } from '../service/appointment-report.service';
import { Diagnosis } from '../model/Diagnosis';
import { Drug } from '../model/Drug';
import { Appointment } from '../model/Appointment';
import { Recipe } from '../model/Recipe';
import { ReportAppointment } from '../model/ReportAppointment';

@Component({
  selector: 'app-edit-old-appointment-report',
  templateUrl: './edit-old-appointment-report.component.html',
  styleUrls: ['./edit-old-appointment-report.component.css']
})
export class EditOldAppointmentReportComponent implements OnInit {

  form = new FormGroup({
    description: new FormControl('', Validators.required),
    info: new FormControl('', Validators.required),
    diagnosis: new FormControl('', Validators.required)
  })
  form2: FormGroup;
  appointment: Appointment = new Appointment();
  diagnoses: Diagnosis[] = [];
  selDiagnosisID:String = "";
  selDiagnosis: Diagnosis = new Diagnosis();
  drugs: Drug[] = [];
  recipe: Recipe = new Recipe();
  reportAppointment: ReportAppointment = new ReportAppointment();
  formVisible: boolean = false;
  finishedAppointment: Appointment[] = [];
  checkedDrug: number[] = [];
  constructor(private service: AppointmentReportService,
    private fb: FormBuilder) {
      this.form2 = this.fb.group({
        checkArray: this.fb.array([], [Validators.required])
      })
     }
  ngOnInit() {
    this.getDiagnosis();
    this.getDrugs();
    this.getOldAppointment();
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form2.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit(){
    this.formVisible = true;
    let drugs = this.form2.get('checkArray').value;
    this.recipe.drugs = drugs;
    console.log(this.recipe);
    console.log(drugs);
    console.log(this.selDiagnosis);
    console.log(this.appointment);
    this.reportAppointment.appointment = this.appointment;
    this.reportAppointment.diagnosis = this.selDiagnosis;
    this.reportAppointment.recipe = this.recipe;
    this.service.setReport(this.reportAppointment).subscribe(
      (result) =>{
        alert('success');
      }
    );
  }

  selectChangeHandler (event: any) {
    this.selDiagnosisID = event.target.value;
    console.log(this.selDiagnosisID);
    for(let d of this.diagnoses){
      if(d.id == this.selDiagnosisID)
        this.selDiagnosis = d;

    }
  }

  getDiagnosis(){
      this.service.getDiagnosisService().subscribe(
        data =>{
            console.log(data);
            this.diagnoses = data;
        });
  }

  getDrugs(){
    this.service.getDrugsService().subscribe(
      data => {
          this.drugs = data;
      }
    );
  }

  getOldAppointment(){
    this.service.getOldAppointmentReport(sessionStorage.getItem("authenticatedUser")).subscribe(
      data =>{
        this.finishedAppointment = data;
        console.log(this.finishedAppointment);
      }
    );
  }

  editApp(id){
    this.formVisible = true;
    this.service.getAppReportInfo(id).subscribe(
      data =>{
        this.reportAppointment = data;
        console.log(this.reportAppointment);
        this.appointment = this.reportAppointment.appointment;
        this.recipe = this.reportAppointment.recipe;
        this.selDiagnosisID = this.reportAppointment.diagnosis.id;
        this.checkedDrug = this.reportAppointment.recipe.drugs;
        this.checkedList();
      });
  }

  checkedList(){
    for(let d of this.drugs){
      for(let s of this.checkedDrug)
      {
        if(d.id == s)
          d.selected = true;
      }
    }
  }

}
