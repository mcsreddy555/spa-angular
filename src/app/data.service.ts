import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer} from './customers';
import { CustomerDetails } from './customerdetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  public getCousterList():Observable<Customer[]>{
    return(this.http.get<Customer[]>("assets/samplejson/customerlist.json"));
  }

  public getCustomerDetails(id:number):Observable<CustomerDetails>{
    return (this.http.get<CustomerDetails>("assets/samplejson/customer"+id+".json"));
  }
}
