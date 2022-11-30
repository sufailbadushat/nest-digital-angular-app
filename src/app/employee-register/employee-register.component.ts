import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
  employeeId = ""
  firstName = ""
  lastName = ""
  houseNumber = ""
  houseName = ""
  streetName = ""
  pincode = ""
  district = ""
  state = ""
  country = ""
  mobileNumber = ""
  emailId = ""
  parentName = ""
  gender = ""
  highestDegree = ""
  yearOfExperience = ""
  dateOfJoining = ""
  username = ""
  password = ""
  confirmPassword = ""


  readValue = () => {
    let data: any = {
      "Employee Id": this.employeeId,
      "Fist Name": this.firstName,
      "Last Name": this.lastName,
      "House Number": this.houseNumber,
      "House Name": this.houseName,
      "Street Name": this.streetName,
      "Pin Code": this.pincode,
      "District": this.district,
      "State": this.state,
      "Country": this.country,
      "Mobile Number": this.mobileNumber,
      "Email Id": this.emailId,
      "Parent Name": this.parentName,
      "Gender": this.gender,
      "Highest Degree": this.highestDegree,
      "Year Of Experience": this.yearOfExperience,
      "Date Of Joining": this.dateOfJoining,
      "Username": this.username,
      "Password": this.password,
      "Confirm Password": this.confirmPassword
    }
    if (this.password == this.confirmPassword) {
      console.log(data);
      alert("Registered successfully.");
    }
    else {
      alert("Password doesn't match.")
    }


  }
}
