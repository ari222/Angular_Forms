import {Exception} from './exception';
export interface Log {
     application:string;
     level:string;
     message:string;
     exception:Exception;
      payload:any;
}