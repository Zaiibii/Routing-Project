import { Component } from '@angular/core';
import { ActivatedRoute,Event,NavigationEnd,NavigationStart,Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Route';
  displayloadingindicator=false;

  constructor(private activetroute:ActivatedRoute, private authservice:AuthService,private router:Router){}
  ngOnInit(){
    this.activetroute.fragment.subscribe((value)=>{
      console.log(value);
      this.jumpto(value);
    })

    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.displayloadingindicator=true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.displayloadingindicator=false;
      }
    })
  }
  jumpto(section){
    document.getElementById(section).scrollIntoView({behavior:'smooth'})
  }

  login(){
    this.authservice.login();
  }

  logout(){
    this.authservice.logout();
  }
}
