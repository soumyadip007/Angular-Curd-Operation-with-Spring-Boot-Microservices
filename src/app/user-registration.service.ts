import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doReg(user){
    return this.http.post("http://localhost:8080/rest/url/save",user,{responseType:'text'});
  }


  public doGetAll(){ 
    return this.http.get("http://localhost:8080/rest/url/all");
  }

  public doGetId(find:string){
    return this.http.get("http://localhost:8080/rest/url/find/"+find);
  }

  public doDelete(id){
    return this.http.get("http://localhost:8080/rest/url/dlt/"+id);
  }
}
