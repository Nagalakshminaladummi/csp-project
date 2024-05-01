import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  contact,
  UniqueConstraintError,
} from './contact';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
    constructor(private http: HttpClient) {}
    headers = new HttpHeaders({
      'content-type': 'application/json',
      Authentication: 'Bearer' + localStorage.getItem('token'),
    });
  
  
  
  private url = 'http://localhost:3022/';
  
  Insert(
    Details: contact
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'contact/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(name: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}contact/Read${name}`);
  }
  Delete(name: String): Observable<InsertedSuccess> {
    console.log(`${this.url}contact/Delete${name}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}contact/Delete${name}`
    );
  }
  Update(name: String, Details: contact) {
    return this.http.put(`${this.url}contact/Update${name}`, Details, {
      headers: this.headers,
    });
  }  
  }
  
