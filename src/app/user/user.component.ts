import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: User;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  id: string = "-1";

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    //alert(this.id)
    this.getUser(this.id)
  }

  getUser(id: string){
    let url = "https://jsonplaceholder.typicode.com/users/" + id;
    this.http.get<User>(url).subscribe(
      res=>{
        this.userData = res;
      }
    )
  }

}

//Megcsinálni a https://jsonplaceholder.typicode.com/users/1 responsa alapján
type User = {
  address: {
    street: string,
    geo: {
      lat: number,
      lng: number
    }
  } 
}
