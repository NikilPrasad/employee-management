import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Employee } from '../model/employee';
import { EmbeddedTemplateAst } from '@angular/compiler';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:9091/emp/addEmployee';
    this.getEmpURL = 'http://localhost:9091/emp/getAll';
    this.updateEmpUrl = 'http://localhost:9091/emp/updateEmployee';
    this.deleteEmpUrl = 'http://localhost:9091/emp/deleteEmployeeById';

   }


   employees = [
     {id:1,name:'amal',email:'amal@tcs.com',salary:10000},
     {id:2,name:'ajay',email:'ajay@tcs.com',salary:20000},
     {id:3,name:'akash',email:'akash@tcs.com',salary:5000},
     {id:4,name:'naveen',email:'naveen@tcs.com',salary:15000},
     {id:5,name:'kishor',email:'kishor@tcs.com',salary:30000},
     {id:6,name:'abi',email:'abi@tcs.com',salary:10000},
     {id:7,name:'evan',email:'evan@tcs.com',salary:10000}  
    
   ]

   currentId=8;



   addEmployee(emp : Employee): Observable<Employee> {
    //  return this.http.post<Employee>(this.addEmpURL,emp);
        return new Observable<Employee>(
          (response: Observer<Employee>)=>{
            emp.id = this.currentId;
            this.currentId++;
              this.employees.push(emp);
              response.next(emp);
              response.complete();
              return ()=>{};
          }
        );
   }

   getAllEmployee(): Observable<Employee[]>{
    return new Observable((response: Observer<Employee[]>)=>{
      response.next(this.employees);
      response.complete();
      return ()=>{};

    })
   }

   updateEmployee(emp :Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.updateEmpUrl, emp);
   }

   deleteEmployee(emp : Employee) : Observable<Employee> {
    return new Observable((response: Observer<Employee>)=>{
      
      response.next(this.employees[0]);
      response.complete();
      return ()=>{};

    })
   }
  

}
