import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ConfigurationService} from '../configuration.service';

import {Host} from '../shared/';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private configurationService : ConfigurationService) {
      console.log('inside test component constructor');
      console.log(configurationService.host);
   }

  ngOnInit() {
    console.log('inside test component init');
  }

}
