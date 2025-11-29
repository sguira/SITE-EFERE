import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environnement   } from 'src/environnements/environnement';
import { StorageService } from './storage.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url = environnement.apiLink;

  IsConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ListPeriodicite: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  header = new HttpHeaders({
    Authorization: 'Bearer ' + this.storage.getStringData('token')!,
  });

  constructor(public http: HttpClient, public storage: StorageService) {}

  login(email: string, password: string): any {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url + '/auth/login', {
          email: email,
          password: password,
        })
        .subscribe(
          (value) => {
            resolve(value);
            this.IsConnected.next(true);
          },
          (error) => {
            reject(error as Error);
            this.IsConnected.next(false);
          }
        );
    });
  }

  getUsers(id?: string): Observable<any> {
    return this.http.get(
      id == null ? this.url + '/admin/users' : this.url + '/admin/users/' + id,
      { headers: this.header }
    );
  }

  deleteData(id: string, path: string) {
    return this.http.delete(this.url + path + '/' + id, {
      headers: this.header,
    });
  }

  AbonnementPeriodicite() {
    return this.http.get(this.url + '/auth/abonnement', {
      headers: this.header,
    });
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable((observer) => {
      this.AbonnementPeriodicite();
      this.getUsers();
    });
  }
}
