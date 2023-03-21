import {NgModule} from "@angular/core"
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from "./course-guard.service";
import { CanDeactivateGuardService } from "./Candeactivate-gaurd.service";

const appRoute:Routes=[
    {path:'',component:HomeComponent},
  //           // {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'Courses',component:CoursesComponent},
    {path:'Contact',canDeactivate:[CanDeactivateGuardService],component:ContactComponent},
    {path:'About',component:AboutComponent},
    // {path:'Courses/course/:id', component:CourseComponent},
           {path:'Courses',canActivateChild:[CourseGuardService], children:[
              {path:'course/:id', component:CourseComponent}
          ] },
    {path:'**',component:ErrorComponent}
  ]


@NgModule({
    imports:[
        RouterModule.forRoot(appRoute,{enableTracing:true})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}