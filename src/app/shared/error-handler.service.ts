import { Injectable, ErrorHandler } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import {LogService} from './log.service';
import {LogType,Log,Exception} from '../shared/';

@Injectable()
export class LogErrorHandler extends ErrorHandler {

  private logService: LogService;
  private title :Title;
  constructor(logService: LogService,title : Title) {
        super(false);
    this.logService = logService;
    this.title = title;
  }

  public handleError(error:any) {
    //send error to server
    try {
let exception:Exception = {
                              type : error.name,
                              message : error.message,
                              stack : error.stack,
                              location: window.location.href    
};
let logObject : Log = { application :  this.title.getTitle(),
                                      level : "ERROR",
                                      message:error.message,
                                      exception:exception,
                                      payload:" "
                                  };
this.logService.logError(logObject);
    } catch (logError) {
      console.error(logError);
    }
  }

}

export var LOG_ERROR_HANDLER_PROVIDER = [
	{
		provide: ErrorHandler,
		useClass: LogErrorHandler
	}
];
