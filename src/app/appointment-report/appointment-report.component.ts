import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Appointment } from '../model/Appointment';
import { AppointmentReportService } from '../service/appointment-report.service';
import { Diagnosis } from '../model/Diagnosis';
import { Drug } from '../model/Drug';

@Component({
  selector: 'app-appointment-report',
  templateUrl: './appointment-report.component.html',
  styleUrls: ['./appointment-report.component.css']
})
export class AppointmentReportComponent implements OnInit {

  form = new FormGroup({
    description: new FormControl('', Validators.required),
    info: new FormControl('', Validators.required)
  })
  form2: FormGroup;
  appointment: Appointment = new Appointment();
  diagnoses: Diagnosis[] = [];
  selDiagnosis:String = "";
  drugs: Drug[] = [];
  constructor(private service: AppointmentReportService,
    private fb: FormBuilder) {
      this.form2 = this.fb.group({
        checkArray: this.fb.array([], [Validators.required])
      })
     }
  ngOnInit() {
    this.getDiagnosis();
    this.getDrugs();
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
    
    let drugs = this.form2.get('checkArray').value;
    console.log(drugs);
  }

  selectChangeHandler (event: any) {

    this.selDiagnosis = event.target.value;
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
}
