import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  StudentDetails,
  UniqueConstraintError,
} from './su';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  


  
  private url = 'http://localhost:3022/';

  Insert(
    Details: StudentDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'su/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(username: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}su/Read${username}`);
  }
  Delete(username: String): Observable<InsertedSuccess> {
    console.log(`${this.url}su/Delete${username}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}su/Delete${username}`
    );
  }
  Update(username: String, Details: StudentDetails) {
    return this.http.put(`${this.url}Students/Update${username}`, Details, {
      headers: this.headers,
    });
  }  
}
