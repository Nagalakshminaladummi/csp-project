import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  InsertedSuccess,
  Courses,
 UniqueConstraintError,
} from '../courses';
import { Subscription } from 'rxjs';

import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  constructor(private Service: CoursesService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Courses = {
    course_name: '',
    course_elgibility:'',
   course_duration: ''
   
   
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.course_name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.course_name} Inserted Succesfully`;
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