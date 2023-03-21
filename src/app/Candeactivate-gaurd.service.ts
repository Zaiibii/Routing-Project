import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ContactComponent } from "./contact/contact.component";

export interface IDeactivateComponent{
    canexit:() => Observable<boolean> | Promise<boolean> | boolean;   
}

export class CanDeactivateGuardService {
    canDeactivate(component:IDeactivateComponent,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,
        nextState:RouterStateSnapshot){
            return component.canexit();
        }
}