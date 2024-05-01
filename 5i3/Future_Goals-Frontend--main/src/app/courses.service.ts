import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
 Courses,
  UniqueConstraintError,
} from './courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  


  
  private url = 'http://localhost:3022/';

  Insert(
    Details: Courses
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'courses/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(course_name: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}courses/Read${course_name}`);
  }
  Delete(course_name: String): Observable<InsertedSuccess> {
    console.log(`${this.url}courses/Delete${course_name}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}courses/Delete${course_name}`                        
    );
  }
  Update(course_name: String, Details: Courses) {
    return this.http.put(`${this.url}courses/Update${course_name}`, Details, {
      headers: this.headers,
    });
  }  
}
