import { Component, OnInit, OnDestroy} from '@angular/core';
import { AdminregService } from '../adminreg.service';
import {
  InsertedSuccess,
 adminreg,
  UniqueConstraintError,
} from '../adminreg';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent  implements OnInit, OnDestroy {
  constructor(private Service: AdminregService) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  User: adminreg = {
    name: '',
    mail: '',
    password: '',
    birth: '',
    phonenumber: '',
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
          this.SuccessMsg = `${this.User.name} Register Succesfully`;
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

