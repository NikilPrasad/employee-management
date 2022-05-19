import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-tcs-employees',
  templateUrl: './tcs-employees.component.html',
  styleUrls: ['./tcs-employees.component.css']
})
export class TcsEmployeesComponent implements OnInit {
  tcsEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllTcsEmployee().subscribe((tcsEmps) => {
      this.tcsEmployees = tcsEmps;
      // console.log('tcs emps ', this.tcsEmployees);
    });
  }
}
