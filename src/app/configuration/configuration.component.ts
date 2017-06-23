import { Component, OnInit } from '@angular/core';
import { ButtonModule, InputMaskModule, InputTextModule,CalendarModule, RadioButtonModule, InputTextareaModule, DropdownModule, MessagesModule } from 'primeng/primeng';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ZeusService , Configuration } from "app/shared";
@Component({
  selector: 'app-form',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  appTypes : any;
  stacks : any;
  environment : any;
  selectedApplicationType : any ='';

  public Form: FormGroup;
  public submitted: boolean = false;

  constructor(private _fb: FormBuilder , private zeusService: ZeusService) {
     this.initialBuild();
  }

  initialBuild(){
    this.stacks = [];
    this.stacks.push({label: 'Microservices', value: 'microservices'});
    this.stacks.push({label: 'Other', value: 'other'});
    this.appTypes = [];
    this.appTypes.push({label: 'ETL', value: 'etl'});
    this.appTypes.push({label: 'Service', value: 'service'});
    this.appTypes.push({label: 'UI', value: 'ui'});
    this.environment = [];
    this.environment.push({label: 'Dev', value: 'dev'});
    this.environment.push({label: 'Test', value: 'test'});
    this.environment.push({label: 'QA', value: 'qa'});
    this.environment.push({label: 'Production', value: 'prod'});
    this.environment.push({label: 'Psup', value: 'psup'});
  }

  ngOnInit() {
      this.Form = this._fb.group({
        stack_name: [''],
        type_name: [''],
        env: [''],
        project: ['',[<any>Validators.required]],
        project_code: [{value: 'project_123', disabled: true}],
        application_name: ['',[<any>Validators.required]],
        bitbucket_repository_name: [''],
        bitbucket_url_name: [''],
        jira_repository_name: [''],
        jira_url_name: [''],
        business_analyst: [''],
        project_lead: [''],
        project_manager: [''],
        project_architect: [''],
        development_team: ['']
      });
  }

  save(inputValue, isValid) {
    if(isValid){
        console.log( "Input values from the form ",inputValue);
        let configuration : Configuration = {
          configuration_name : this.Form.controls['stack_name'].value,
          configuration_type  : this.Form.controls['type_name'].value,
          configuration_content : JSON.stringify(inputValue)
        };
        this.zeusService.submitConfiguration(configuration).subscribe(
            response => {
            // handle response ,if any
            this.submitted = true;
            },
            error =>  {
                //handle error here
        });
    }
  }

}
