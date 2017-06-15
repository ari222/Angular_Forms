import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ConfigurationService} from '../configuration.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import {
  Log, 
  LogType
} from '../shared/';
import { environment } from '../../environments/environment';

@Injectable()
export class ZeusService {
  private http: Http;
  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  constructor(http: Http,private configurationService : ConfigurationService) {
    this.http = http;
  }
public submitConfiguration(configurationData : any) : Observable<any> {
  return this.http.post(this.configurationService.host.host1 + "commitConfiguration", JSON.stringify(configurationData), 
   new RequestOptions( { headers : this.setHeaders()})).map(response => response.json());
}


}