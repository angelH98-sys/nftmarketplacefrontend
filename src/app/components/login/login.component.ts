import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  form = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)])
  });

  constructor(private userService: UserService,
              private cookies: CookieService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() : void{

    if(this.form.invalid){

      this.showAlert();
      return;
    }

    this.login();
    

  }

  async login(){

    await this.userService.login(this.form.value).subscribe({
      next : (resp : any) => {
        console.log(resp);
        this.cookies.set("nftmtpauth", resp.Auth);
        alert("User loging succesfully");
        this.router.navigate(['/projectlist']); 
      },
      error : (rej) => {
        console.log(rej);
        alert("Something goes wrong...");
      }
    });
  } 

  showAlert() : void{

    if(this.form.controls["username"].status == "INVALID"){

      alert("Username is invalid");
      return;
    }

    if(this.form.controls["password"].status == "INVALID"){

      alert("Password is invalid");
      return;
    }

  }

}
