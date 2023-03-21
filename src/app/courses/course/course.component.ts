import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private activatedroute:ActivatedRoute, private servicedata:ServicesService, private router:Router){}
course:any
courseid:any
coursedel:any;
editMode:Boolean=false;

  ngOnInit(){
    // this.courseid=this.activatedroute.snapshot.paramMap.get('id');
    // this.course=this.servicedata.Courses.find(x => x.id == this.courseid);

    this.coursedel=this.activatedroute.paramMap.subscribe((param)=>{
      this.courseid=param.get('id');
      console.log("result",this.courseid)
    this.course=this.servicedata.Courses.find(x=>x.id==this.courseid)
    })
    console.log(this.coursedel);
    this.activatedroute.queryParamMap.subscribe((params)=>{
      this.editMode=Boolean(params.get('edit'))
      console.log(this.editMode)
    })
  }
  ngOnDestroy(){
    this.coursedel.unsubscribe();
  }

  queryparams(){
    this.router.navigate(['/Courses/course',this.courseid],{queryParams:{edit:true}})
  } 
}
