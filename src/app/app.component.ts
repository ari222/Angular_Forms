import { Component, OnInit, } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { environment } from '../environments/environment';

import {ConfigurationService} from './configuration.service';
import {LogService,Host} from './shared/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  public constructor(private titleService: Title, private configurationService: ConfigurationService, private logService: LogService) { 
    console.log('inside app component constructor');
  }
  ngOnInit() {
    console.log('inside app component on init');
    this.title = this.titleService.getTitle();
    this.logService.logRoute = 'core/log';
  }
  trigger() {
    
  }
}
