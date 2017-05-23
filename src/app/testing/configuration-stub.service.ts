import { Injectable } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {Host} from '../shared/';
import {ConfigurationService} from '../configuration.service';

@Injectable()
export class ConfigurationServiceStub {
private baseUrl: string = '../config/hostConfig.json';
  
  private _host : Host;
  public get host() : Host {
    return this._host;
  }
  public set host(v : Host) {
    this._host = v;
  }
  

  constructor() { }

  retrieveHostInfo() : Observable<Host> {
      let host : Host = {
          host1 : 'blah',
          host2 : 'blah blah'
      };
      return Observable.of(host);
    //return this.http.get(this.baseUrl).map(response => response.json());
  }

}