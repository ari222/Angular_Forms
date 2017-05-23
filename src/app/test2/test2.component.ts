import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../configuration.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private configurationService : ConfigurationService) {
    console.log('inside test2 component constructor');
    console.log(configurationService.host);
   }

  ngOnInit() {
    console.log('inside test2 component init');
  }

}
