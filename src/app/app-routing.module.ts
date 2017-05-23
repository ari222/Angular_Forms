import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/';
import { Test2Component } from './test2/';
import {AboutComponent} from './about/';
import { ConfigurationResolveService } from './configuration-resolve.service';

const routes: Routes = [
  {
    path: '',
    resolve:[ConfigurationResolveService],
    pathMatch: 'prefix',
    children: [
      { path: '',redirectTo:'test1',pathMatch:'full'},
      { path: 'test1', component: TestComponent },
      { path: 'test2', component: Test2Component },
      { path:'about',component:AboutComponent}
    ]
  }
   // {path:'',redirectTo:'test1',resolve:[ConfigurationResolveService],pathMatch:'prefix'},
  // { path: 'test1', component: TestComponent },
  // { path: 'test2', component: Test2Component }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{enableTracing :true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoggerRoutingModule { }
