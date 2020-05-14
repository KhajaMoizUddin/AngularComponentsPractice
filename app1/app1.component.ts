import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
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
       EmployeeId: 209687,
       EmployeeName: 'Moizuddin',
       EmployeeDesignation: 'Software Engineer',
       DateOfJoining: new Date('Mon Mar 16 2014 07:44:57'),
       EmployeeAddress: 'Kokapet, Hyderabad',
       EmployeePhone: 8019804474,
       EmployeeAge: 28,
       Salary: 30000,
       City: 'Hyderabad',
       CompanyName: 'Legato'
    },
    {
      EmployeeId: 209687,
      EmployeeName: 'Vikas',
      EmployeeDesignation: 'S.Software Engineer',
      DateOfJoining: new Date('Mon Mar 01 2015 07:44:57'),
      EmployeeAddress: 'Gacchibowli, Hyderabad',
      EmployeePhone: 8019804474,
      EmployeeAge: 28,
      Salary: 30000,
      City: 'Hyderabad',
      CompanyName: 'TCS'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
