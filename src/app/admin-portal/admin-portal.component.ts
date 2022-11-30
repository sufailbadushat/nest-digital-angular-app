import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {

  username = ""
  password = ""

  constructor(private route: Router) { }

  readValue = () => {
    let data: any = {
      "username": this.username,
      "password": this.password
    }
    console.log(data)
    if (data.username == "admin" && data.password == "nestdigital") {

      this.route.navigate(['/viewAllCourses'])

    } else {
      alert("invalid login..!")
    }
  }

}
