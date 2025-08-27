import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  saveData(label:string,value:string){
    localStorage.setItem(label,value)
  }

  getStringData(label:string){
    return localStorage.getItem(label)
  }
}
