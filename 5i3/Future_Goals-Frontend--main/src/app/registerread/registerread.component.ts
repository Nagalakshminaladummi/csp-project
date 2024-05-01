import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { InsertedSuccess, Read, register} from '../register';

@Component({
  selector: 'app-registerread',
  templateUrl: './registerread.component.html',
  styleUrls: ['./registerread.component.css']
})
export class RegisterreadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: RegisterService) {}
 name: String = '';
  GotResult: Boolean = false;
  UpdatedUser: register = {
   name: '',
    mail: '',
  password: '',
  birth: '',
  phonenumber:''
  };
  Results = [];
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
  Update(name: String, Details: register) {
    this.Service.Update(name, Details).subscribe({
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