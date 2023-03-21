import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[ServicesService]
})
export class CoursesComponent {

  constructor(private dataservice:ServicesService){}

  course:{id:number, name:string,author:string, duration:number,type:string,price:number,ratings:number,
  image:string,description:string
  }[]=[];

  ngOnInit(){
    this.course=this.dataservice.Courses;
  }
}
