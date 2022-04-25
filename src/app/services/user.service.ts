import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: any, userType: String){

    let url = "";

    switch(userType){

      case "Investor":
        url = "http://localhost:9090/api/users/create/investor";
        break;
      case "Customer":
        url = "http://localhost:9090/api/users/create/customer";
        break;
    }

    return this.http.post(url, user);

  }

  login(user: any){
    //TODO

    const url = "http://localhost:9090/api/users/login";

    return this.http.post(url, user);

  }
}
