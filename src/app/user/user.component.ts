import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData!: User;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  id: string = "-1";

  ngOnInit(): void {
    //alert(this.id)
    this.getUser();
  }

  getUser(){
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/1')
    .subscribe((data: User) => {
      this.userData = data;
    });
  }

}

//Megcsinálni a https://jsonplaceholder.typicode.com/users/1 responsa alapján
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string,
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string,
      lng: string
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  } 
}
