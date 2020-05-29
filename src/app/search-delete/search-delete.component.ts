import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  email:string;
  find:string;
  constructor(private service:UserRegistrationService) { }

  ngOnInit() {
    let res=this.service.doGetAll();
    res.subscribe((data)=>this.users=data);
  }

  
  public delteUser(id:string){
    let res=this.service.doDelete(id);
    res.subscribe((data)=>this.users=data);
  }


  
  public findById(find:string){
    console.log(find);
    console.log('Ji');
    let res=this.service.doGetId('12');
    res.subscribe((data)=>this.users=data);
  }

}
