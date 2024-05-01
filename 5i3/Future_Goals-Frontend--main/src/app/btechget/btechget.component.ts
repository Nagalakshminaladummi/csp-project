import { Component,OnInit } from '@angular/core';
import { BtechinsertService } from '../btechinsert.service';
import { InsertedSuccess, Read, btechinsert} from '../btechinsert';

@Component({
  selector: 'app-btechget',
  templateUrl: './btechget.component.html',
  styleUrls: ['./btechget.component.css']
})
export class BtechgetComponent  implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: BtechinsertService) {}
 coursename: String = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: btechinsert = {
   coursename: '',
    duration: '',
   elgibility: '',
   fee: '',
  };
  Results = [];

  Read1(coursename: String) {
    this.Service.Read(coursename).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          coursename:this.a[0],
          duration:this.a[1],
          elgibility:this.a[2],
         fee:this.a[3],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(coursename: String) {
    this.Service.Read(coursename).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(coursename: String, Details: btechinsert) {
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
  Delete(coursename: String) {
    this.Service.Delete(coursename).subscribe({
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
