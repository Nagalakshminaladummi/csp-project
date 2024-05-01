import { Component,OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { Subscription } from 'rxjs';
import { InsertedSuccess, Read, StudentDetails } from '../su';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CRUDService) {}
  username: String = '';
  GotResult: Boolean = false;
  UpdatedUser: StudentDetails = {
    username: '',
    suggestion: '',
    quires: '',
    experience: '',
    rating: '',
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
  Delete(username: String) {
    this.Service.Delete(username).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}