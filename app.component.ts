import { Component } from '@angular/core';

@Component({
  //selector: 'app-root',
  //selector:'[app-root]',
  selector:'.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
   EmployeeId : 103621,
   EmployeeName : 'Khaja Moizuddin',
   EmployeeDesignation : 'Software Engineer',
   DateOfJoining : new Date('Mon Apr 22 2016 10:30:57'),
   EmployeeAddress : 'Gacchibowli, Hyderabad',
   EmployeePhone : 8019804474,
   EmployeeAge : 29,
   Salary : 10000,
   City : 'Hyderabad',
   CompanyName : 'Legato'
  },
  {
    EmployeeId : 103622,
    EmployeeName : 'Pavan Kumar',
    EmployeeDesignation : 'S.Software Engineer',
    DateOfJoining : new Date('Tue Jul 19 2012 09:27:45'),
    EmployeeAddress : 'DLF City, Bangalore',
    EmployeePhone : 9030344566,
    EmployeeAge : 25,
    Salary : 15000,
    City : 'Bangalore',
    CompanyName : 'Infosys'
  },
  {
    EmployeeId : 165893,
    EmployeeName : 'Vikas',
    EmployeeDesignation : 'S.Software Engineer',
    DateOfJoining : new Date('Wed Mar 02 2015 08:48:23'),
    EmployeeAddress : 'Electronic City, Bangalore',
    EmployeePhone : 9030344566,
    EmployeeAge : 23,
    Salary : 20000,
    City : 'Bangalore',
    CompanyName : 'TCS'
  },
  {
    EmployeeId : 1045896,
    EmployeeName : 'Vivek',
    EmployeeDesignation : 'Delivery Manager',
    DateOfJoining : new Date('Wed Mar 02 2015 08:48:23'),
    EmployeeAddress : 'Madhapur, Hyderabad',
    EmployeePhone : 9030344566,
    EmployeeAge : 23,
    Salary : 20000,
    City : 'Hyderabad',
    CompanyName : 'Microsoft'
  }
];

}
