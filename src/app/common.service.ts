import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  pressing = false;
  getDownflag(){
    this.pressing = true;
  }
  removeDownflag(){
    this.pressing = false;
  }
}
