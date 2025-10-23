import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  url: any = 'https://api.efere.space/backend/users/vitrine/contact';
  constructor(private http: HttpClient) {}

  sendMail(contact: Contact): Observable<any> {
    const header = new HttpHeaders({
      'Content-type': 'application/json',
    });
    return this.http.post<any>(this.url, contact, {
      headers: header,
      responseType: 'text' as 'json',
    });
  }
}
