import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Candeactivate-gaurd.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{

firstName;
lastName;
country;
subject;

canexit(){
  if(this.firstName||this.lastName||this.country||this.subject){
    return confirm(' You have Unsaved changes.Do you really want to discard changes? ');
  }else{
    return true;
  }
}
}
