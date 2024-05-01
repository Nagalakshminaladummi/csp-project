import { Component,OnInit} from '@angular/core';
import {  InsertedSuccess, Read, StudentDetails } from '../su';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CRUDService) {}
 username: String = '';
  GotResult: Boolean = false;
  UpdatedUser: StudentDetails = {
   username: '',
  suggestion  : '',
  quires : '',
  experience: '',
  rating:'',
  };
  Results = [];
  Read(username: String) {
    this.Service.Read(username).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(username: String, Details: StudentDetails) {
    this.Service.Update(username, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(username: String) {
    this.Service.Delete(username).subscribe({
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
