import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../configuration.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private configurationService : ConfigurationService) {
    console.log('inside about component constructor');
    console.log(configurationService.host);
   }

  ngOnInit() {
    console.log('inside init of about component');
  }

}
