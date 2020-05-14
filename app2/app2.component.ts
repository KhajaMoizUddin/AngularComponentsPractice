import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  EmployeeId = 1702356;
  FirstName = 'Khaja';
  LastName = 'Moizuddin';
  EmployeeName: string = this.FirstName + this.LastName;
  EmployeeDesignation = 'Software Engineer';
  DateOfJoining: Date = new Date('Mon Apr 22 2016 07:44:57');
  EmployeeAddress = 'Malakpet, Hyderabad';
  EmployeePhone = 8019804474;
  EmployeeAge = 29;
  Salary  = 20000;
  City = 'Hyderabad';
  CompanyName = 'Legato Health Technologies';

  employeeList: any[] = [
    {
       EmployeeId: 203654,
       EmployeeName: 'Khaja Moizuddin',
       EmployeeDesignation: 'Software Engineer',
       DateOfJoining: new Date('Mon Apr 22 2016 07:44:57'),
       EmployeeAddress: 'Gacchibowli, Hyderabad',
       EmployeePhone: 8019804474,
       EmployeeAge: 30,
       Salary: 30000,
       City: 'Hyderabad',
       CompanyName: 'Legato'
    },
    {
      EmployeeId: 203654,
      EmployeeName: 'Khaja Moizuddin',
      EmployeeDesignation: 'Software Engineer',
      DateOfJoining: new Date('Mon Apr 22 2016 07:44:57'),
      EmployeeAddress: 'Gacchibowli, Hyderabad',
      EmployeePhone: 8019804474,
      EmployeeAge: 30,
      Salary: 30000,
      City: 'Hyderabad',
      CompanyName: 'Legato'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
