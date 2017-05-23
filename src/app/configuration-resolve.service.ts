import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LogService, Host } from './shared/';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class ConfigurationResolveService implements Resolve<Host> {

  constructor(private configurationService: ConfigurationService, private logService: LogService) {
    console.log('inside config resolve constructor');
   }

  resolve(route: ActivatedRouteSnapshot): Observable<Host> | Host {
    console.log('inside resolve function');

    if (this.configurationService && this.configurationService.host) {
       return this.configurationService.host;
    }
    return this.configurationService.retrieveHostInfo().map(response => {
      if (response) {
        this.configurationService.host = <Host>response;
        let configService = this.configurationService;

        if (configService && configService.host) {
          if (configService.host.host1) {
            this.logService.logHostPrimary = configService.host.host1;
          }
          if (configService.host.host2) {
            this.logService.logHostFailover = configService.host.host2;
          }
        }
      return response;
      }
      else {
        //handle business logic if any
        return null;
      }
    });
  }
}
