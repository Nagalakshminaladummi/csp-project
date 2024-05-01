import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  login,
  UniqueConstraintError,
} from './login';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });



private url = 'http://localhost:3022/';

Insert(
  Details: login
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'login/Insert',
    Details,
    { headers: this.headers }
  );
}
Read(username: String): Observable<Read> {
  return this.http.get<Read>(`${this.url}login/Read${username}`);
}
Delete(username: String): Observable<InsertedSuccess> {
  console.log(`${this.url}login/Delete${username}`);
  return this.http.delete<InsertedSuccess>(
    `${this.url}login/Delete${username}`
  );
}
Update(username: String, Details: login) {
  return this.http.put(`${this.url}login/Update${username}`, Details, {
    headers: this.headers,
  });
}  
}
