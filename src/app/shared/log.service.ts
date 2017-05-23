import { Injectable  } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';

import {Log, LogType} from '../shared/';
import { environment } from '../../environments/environment';

@Injectable()
export class LogService {
  private http: Http;

  
  private _logRoute : string;
  public get logRoute() : string {
    return this._logRoute;
  }
  public set logRoute(v : string) {
    this._logRoute = v;
  }
  
  private _logHostPrimary : string;
  public get logHostPrimary() : string {
    return this._logHostPrimary;
  }
  public set logHostPrimary(v : string) {
    this._logHostPrimary = v;
  }
  
  private _logHostFailover : string;
  public get logHostFailover() : string {
    return this._logHostFailover;
  }
  public set logHostFailover(v : string) {
    this._logHostFailover = v;
  }
  
  

  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  constructor(http: Http) {
    this.http = http;
  }

  public logError(logObject: Log): void {
    this.logToConsole(logObject);
    this.logToServer(logObject);
  }

  private logToConsole(logObject: Log): void {
    if (console) {
console.error(logObject.exception.message);
console.error(logObject.exception.stack);
    }
  }
  private logToServer(logObject: Log): void {
    // let logRoute = 'core/log';
    let payload = JSON.stringify(logObject);
    if(this._logHostPrimary) {
    this.http
      .post(
      `${this._logHostPrimary}${this.logRoute}`,
      payload,
      { headers: this.setHeaders() }
      )
      .subscribe(
      (httpResponse: Response): void => {
        // handle if any
      },
      (httpError: any): void => {
        // console.log(httpError);
        // call failover here ,can handle unlimited failover
        if (this._logHostFailover){
        this.http.post(`${this._logHostFailover}${this.logRoute}`, payload, { headers: this.setHeaders() }).subscribe(
          (httpResponse: Response): void => {

          },
          (httpError: any): void => {

          }
        );
        }
        //end failover here
      }
      );
    }
  }
}
