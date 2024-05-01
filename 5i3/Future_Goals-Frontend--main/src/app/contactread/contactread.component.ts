import { Component,OnInit, OnDestroy  } from '@angular/core';
import {
  Read,
 contact,
  UniqueConstraintError,
  InsertedSuccess,
} from '../contact';
import { Subscription } from 'rxjs';
import { ContactService} from '../contact.service';

@Component({
  selector: 'app-contactread',
  templateUrl: './contactread.component.html',
  styleUrls: ['./contactread.component.css']
})
export class ContactreadComponent
implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service:ContactService ) {}
name: String = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: contact = {
   name: '',
    email: '',
   phonenumber: '',
  message: '',
  };
  Results = [];

  Read1(name: String) {
    this.Service.Read(name).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          name:this.a[0],
          email:this.a[1],
          phonenumber:this.a[2],
         message:this.a[3],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(name: String) {
    this.Service.Read(name).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(coursename: String, Details: contact) {
    this.Service.Update(coursename, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(name: String) {
    this.Service.Delete(name).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
  }
}
