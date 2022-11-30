import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CarousalComponent } from './carousal/carousal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { NavEmployeeComponent } from './nav-employee/nav-employee.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

const myRoute: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"adminPortal",
    component:AdminPortalComponent
  },
  {
    path: "viewAllCourses",
    component: ViewCoursesComponent
  },
  {
    path: "viewAllFriends",
    component: ViewFriendsComponent
  },
  {
    path: "employeeLogin",
    component: EmployeeLoginComponent
  },
  {
    path: "addCourses",
    component:AddCourseComponent
  },
  {
    path: "addFriends",
    component: AddFriendComponent
  },
  {
    path: "employeeRegister",
    component: EmployeeRegisterComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    CarousalComponent,
    AdminPortalComponent,
    ViewCoursesComponent,
    ViewFriendsComponent,
    NavAdminComponent,
    EmployeeLoginComponent,
    AddCourseComponent,
    AddFriendComponent,
    NavEmployeeComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
