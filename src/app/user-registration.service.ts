import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(http:HttpClient) { }

  public doReg(user){
    return this.http.post();
  }
}
