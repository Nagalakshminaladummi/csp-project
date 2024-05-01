import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
 btechinsert,
  UniqueConstraintError,
} from './btechinsert';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BtechinsertService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  


  
  private url = 'http://localhost:3022/';

  Insert(
    Details: btechinsert
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'btech/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(coursename: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}btech/Read${coursename}`);
  }
  Delete(coursename: String): Observable<InsertedSuccess> {
    console.log(`${this.url}btech/Delete${coursename}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}btechinsert/Delete${coursename}`
    );
  }
  Update(coursename: String, Details: btechinsert) {
    return this.http.put(`${this.url}btech/Update${coursename}`, Details, {
      headers: this.headers,
    });
  }  
}
