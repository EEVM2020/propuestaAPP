import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{Acto1Component} from './acto1/acto1.component'
import{Acto2Component} from './acto2/acto2.component'
import{Acto3Component} from './acto3/acto3.component'
import{Acto4Component} from './acto4/acto4.component'

const routes: Routes = [
  {path: '',redirectTo:"/acto1",pathMatch:"full"},
  {path:'acto1',component:Acto1Component},
  {path:'acto2',component:Acto2Component},
  {path:'acto3',component:Acto3Component},
  {path:'acto4',component:Acto4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
