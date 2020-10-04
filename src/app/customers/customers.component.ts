import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customers';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[]=[];
  selectedCustomer : string="temp";

  constructor(private dataService:DataService, private router:Router ) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList():void{
    this.dataService.getCousterList().subscribe(
      (customers:Customer[])=>{
        this.customers = customers;
        this.selectedCustomer=customers[0].name;
        console.log(customers)
      }
    )
  }


  setSelectedCustomer(cust:string):void{
    this.selectedCustomer=cust;
  }

  goToDetailsPage(id:number):void{
    this.router.navigateByUrl("/customerdetails/"+id);
  }

}
