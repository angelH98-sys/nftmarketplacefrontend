import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  existJWT : boolean = false;

  constructor(private cookies : CookieService,
    private router: Router){}

  ngOnInit(): void{

    let jwt = this.cookies.get("nftmtpauth");

    if(jwt.length > 0) this.existJWT = true;
  }

  logOut(){

    if(confirm("¿Are you shure you want loggout?")){

      this.cookies.delete("nftmtpauth");
      this.existJWT = false;
    }
  }

}
