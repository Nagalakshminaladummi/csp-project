import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  inter,
  UniqueConstraintError,
} from '../inter';
import { Subscription } from 'rxjs';
import { InterService } from '../inter.service';

@Component({
  selector: 'app-interinsert',
  templateUrl: './interinsert.component.html',
  styleUrls: ['./interinsert.component.css']
})
export class InterinsertComponent implements OnInit, OnDestroy {
  constructor(private Service: InterService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: inter = {
    coursename: '',
    duration: '',
    elgibility:'',
    fee:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.coursename} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.coursename} Inserted Succesfully`;
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