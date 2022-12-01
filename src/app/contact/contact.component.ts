import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name=""
  designation=""
  phone="" 
  mail="" 

  readValues=()=>{
    let data:any={"name":this.name,"designation":this.designation,"phone":this.phone,
  "mail":this.mail}

  console.log(data)
  alert("Message has been sent.")
    this.name=""
    this.designation=""
   this.phone="" 
    this.mail="" 
  
    
  
  }

}