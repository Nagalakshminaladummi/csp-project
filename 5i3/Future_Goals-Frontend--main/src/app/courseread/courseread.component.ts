import { Component, OnInit } from '@angular/core';
import {CoursesService } from '../courses.service';
import { InsertedSuccess, Read, Courses} from '../courses';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-courseread',
  templateUrl: './courseread.component.html',
  styleUrls: ['./courseread.component.css']
})
export class CoursereadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service:CoursesService) {}
 course_name: String = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: Courses = {
   course_name: '',
  course_elgibility: '',
   course_duration: '',
  
  };
  Results = [];

  Read1(course_name: String) {
    this.Service.Read(course_name).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          course_name:this.a[0],
         course_elgibility:this.a[1],
         course_duration:this.a[2],
    
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(course_name: String) {
    this.Service.Read(course_name).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  a1=[]
  canShowData=false
  Read2(form:NgForm)
  
  {
    console.log(form.value.search)
    this.Service.Read(form.value.search).subscribe({
     
      next: (Data: Read) => {
        this.a1 = Data.Result;
        console.log(this.a1)
        this.canShowData= true;

      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(course_name: String, Details: Courses) {
    this.Service.Update(course_name, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(course_name: String) {
    this.Service.Delete(course_name).subscribe({
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
