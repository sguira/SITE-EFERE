import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnemen } from 'src/environnements/environnement';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url=environnemen.apiLink;

    header=new HttpHeaders({
      "Authorization":"Bearer "+this.storage.getStringData("token")!
    }
  )

  constructor(public http:HttpClient,public storage:StorageService) { }



  login(email:string,password:string):Observable<any>{
    return this.http.post(this.url+"/auth/login",{"email":email,"password":password})
  }

  getUsers(id?:string):Observable<any>{
    return this.http.get( id==null? this.url+"/admin/users":this.url+"/admin/users/"+id,{headers:this.header})
  }

  deleteData(id:string,path:string){
    return this.http.delete(this.url+path+"/"+id,{headers:this.header})
  }
}
