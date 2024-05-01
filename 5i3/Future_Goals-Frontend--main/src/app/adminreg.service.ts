import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  adminreg,
  UniqueConstraintError,
} from './adminreg';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminregService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });



private url = 'http://localhost:3022/';

Insert(
  Details: adminreg
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'adminreg/Insert',
    Details,
    { headers: this.headers }
  );
}
Read(username: String): Observable<Read> {
 
  return this.http.get<Read>(`${this.url}adminreg/Read${username}`);
}
Delete(username: String): Observable<InsertedSuccess> {
  console.log(`${this.url}adminreg/Delete${username}`);
  return this.http.delete<InsertedSuccess>(
    `${this.url}adminreg/Delete${username}`
  );
}
Update(username: String, Details: adminreg) {
  return this.http.put(`${this.url}adminreg/Update${username}`, Details, {
    headers: this.headers,
  });
}  
}




