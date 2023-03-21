import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './Candeactivate-gaurd.service';

// const appRoute:Routes=[
//   {path:'',component:HomeComponent},
// //           // {path:'',redirectTo:'Home',pathMatch:'full'},
//   {path:'Home',component:HomeComponent},
//   {path:'Courses',component:CoursesComponent},
//   {path:'Contact',component:ContactComponent},
//   {path:'About',component:AboutComponent},
//   {path:'Courses/course/:id', component:CourseComponent},
// //          // {path:'Courses', children:[
// //           //   {path:'course/:id',component:CourseComponent}
// //         // ] },
//   {path:'**',component:ErrorComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoute)
  ],
  providers: [CourseGuardService,AuthService,CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
