import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { RegisterComponent } from './register/register.component';
import { UploaddocComponent } from './uploaddoc/uploaddoc.component';

const routes: Routes = [
  { path:"", component:RegisterComponent },
  { path:"empdetails", component:EmpdetailsComponent},
  { path:"uploaddoc", component:UploaddocComponent},
  { path:"company", component:CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
