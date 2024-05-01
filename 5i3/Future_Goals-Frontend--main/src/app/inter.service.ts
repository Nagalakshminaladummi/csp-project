import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
 inter,
  UniqueConstraintError,
} from './inter';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  


  
  private url = 'http://localhost:3022/';

  Insert(
    Details: inter
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'inter/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(coursename: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}inter/Read${coursename}`);
  }
  Delete(coursename: String): Observable<InsertedSuccess> {
    console.log(`${this.url}inter/Delete${coursename}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}inter/Delete${coursename}`                        
    );
  }
  Update(coursename: String, Details: inter) {
    return this.http.put(`${this.url}inter/Update${coursename}`, Details, {
      headers: this.headers,
    });
  }  
}
