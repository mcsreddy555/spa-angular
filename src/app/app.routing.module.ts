import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes=[
    {path:'',redirectTo:'/customers',pathMatch:'full'},
    {path: 'customers',component:CustomersComponent},
    {path:'customerdetails/:id',component:CustomerdetailsComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutindModule{}