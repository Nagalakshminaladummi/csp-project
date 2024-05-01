
import { Component,OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
 contact,
  UniqueConstraintError,
  
} from '../contact';
import { Subscription } from 'rxjs';
import { ContactService} from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private Service:ContactService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: contact  = {
    name:'',
    email:'',
    phonenumber:'',
    message:'',



  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.name} sent message Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
