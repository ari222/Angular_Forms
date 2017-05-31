import { Component, OnInit } from '@angular/core';
import { ButtonModule, InputMaskModule, InputTextModule,CalendarModule, RadioButtonModule, InputTextareaModule, DropdownModule, MessagesModule } from 'primeng/primeng';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  value : Date;
  radioButtonVal : string = 'Yes';

  accebitlity : any;
  dbAvailable : any;
  appTypes : any;
  isVendor : any;

  public Form: FormGroup;
  public submitted: boolean = false;

  constructor(private _fb: FormBuilder) {
     this.initialBuild();
  }

  initialBuild(){
    this.accebitlity = [];
    this.accebitlity.push({label: 'Private', value: 'Private'});
    this.accebitlity.push({label: 'Public', value: 'Public'});
    this.accebitlity.push({label: 'both', value: 'Private and Public'});
    this.dbAvailable = [];
    this.dbAvailable.push({label: 'Mongo', value: 'Mongo'});
    this.dbAvailable.push({label: 'MySQL', value: 'MySQL'});
    this.dbAvailable.push({label: 'Cassandra with Solr', value: 'Cassandra with Solr'});
    this.dbAvailable.push({label: 'Cassandra without Solr', value: 'Cassandra without Solr'});
    this.dbAvailable.push({label: 'Other', value: 'Other'});
    this.appTypes = [];
    this.appTypes.push({label: 'ETL', value: 'ETL'});
    this.appTypes.push({label: 'UI', value: 'UI'});
    this.appTypes.push({label: 'Service', value: 'Service'});
    this.appTypes.push({label: 'Other', value: 'Other'});
    this.isVendor = [];
    this.isVendor.push({label: 'Yes', value: 'Yes'});
    this.isVendor.push({label: 'No', value: 'No'});
  }

  ngOnInit() {
      this.Form = this._fb.group({
        generalInfo: this._fb.group({
          projectName: [null, [<any>Validators.required]],
          repoName: ['']
        }),
        instances: this._fb.group({
          applicationType: [''],
          otherType: [''],
          desiredApplicationName : ['']
        }),
        instanceInfo: this._fb.group({
          database: [''],
          otherDb: [''],
          dbCapacity6moth: [''],
          dbCapacity1year: ['']
        }),
        securityReview: this._fb.group({
          scheduleAt: ['']
        }),
        vendorInfo: this._fb.group({
          vendorName: [''],
          isPurchaseFromVendor: [''],
          accesiblity: [''],
          vendorContact: [''],
          vendorAddress: [''],
          productOwner: [''],
          description: ['']
        }),
        requrestorInfo: this._fb.group({
          requestorName: [''],
          deptName: [''],
          deptManager: [''],
          description: ['']
        }),
        extraInfo: this._fb.group({
          description: ['']
        })
      });
  }

  save(inputValue, isValid) {
    if(isValid){
        console.log( "Input values from the form ",inputValue);
        this.submitted = true;
    }
  }

}
