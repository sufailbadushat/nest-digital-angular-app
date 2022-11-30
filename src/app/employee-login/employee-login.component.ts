import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  employeeId = ""
  password = ""

  constructor(private route:Router){}

  readValue = () => {
    let data: any = {
      "employeeId": this.employeeId,
      "password": this.password
    }
    console.log(data);
    if (this.employeeId=="1122" && this.password=="12345") {
      this.route.navigate(['/addCourses'])
    } else {
      alert("invalid login..!");
    }
  }

}
