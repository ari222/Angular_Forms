import { Injectable } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Host} from './shared/';

@Injectable()
export class ConfigurationService {
private baseUrl: string = '../config/hostConfig.json';
  
  private _host : Host;
  public get host() : Host {
    return this._host;
  }
  public set host(v : Host) {
    this._host = v;
  }
  

  constructor(private http: Http) { }

  retrieveHostInfo() : Observable<Host> {
    return this.http.get(this.baseUrl).map(response => response.json());
  }

}
