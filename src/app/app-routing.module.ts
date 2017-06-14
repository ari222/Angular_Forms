import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/';
import { ConfigurationResolveService } from './configuration-resolve.service';

const routes: Routes = [
  {
    path: '',
    resolve:[ConfigurationResolveService],
    pathMatch: 'prefix',
    children: [
      { path: '',redirectTo:'configuration',pathMatch:'full'},
      { path:'configuration', component:ConfigurationComponent}
    ]
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{enableTracing :true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoggerRoutingModule { }
