
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,

  UniqueConstraintError,
} from '../btechinsert';
import { Subscription } from 'rxjs';
import { btechinsert } from '../btechinsert';
import { BtechinsertService } from '../btechinsert.service';
@Component({
  selector: 'app-btechinsert',
  templateUrl: './btechinsert.component.html',
  styleUrls: ['./btechinsert.component.css']
})
export class BtechinsertComponent implements OnInit, OnDestroy {
  constructor(private Service: BtechinsertService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: btechinsert= {
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