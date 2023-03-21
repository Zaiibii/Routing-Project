import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route:Router, private activatedroute:ActivatedRoute){}
  GoToHome(){
    // this.route.navigate(['Home'],{relativeTo:this.activatedroute})
    this.route.navigateByUrl('Home');
  }
}
