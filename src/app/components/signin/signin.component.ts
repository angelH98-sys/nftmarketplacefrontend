import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { elementAt, ignoreElements } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  userType = "Customer";

  form = new FormGroup({
    username : new FormControl('', Validators.required),
    fullname : new FormControl('', Validators.required),
    password : new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]),
    email : new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() : void{

    
    if(this.form.invalid){

      this.showAlert();
      return;

    }

    this.createUser();

  }

  async createUser(){

    await this.userService.createUser(this.form.value, this.userType).subscribe({
      complete: () => {
        alert("User created succesfully");
        this.router.navigate(['/projectlist']); 
        
      },
      error: (rej) => {
        switch(rej.error){

          case "Username not available":
            alert("Username not available");
            break;

          case "Email not available":
            alert("Email not available");
            break;

          default:
            alert("Something goes wrong...");
            break;
        }
      }
    });

  }

  showAlert() : void{

    if(this.form.controls["username"].status == "INVALID"){

      alert("Username is invalid");
      return;
    }

    if(this.form.controls["fullname"].status == "INVALID"){

      alert("Full name is invalid");
      return;
    } 

    if(this.form.controls["password"].status == "INVALID"){

      alert("Password is invalid");
      return;
    }

    if(this.form.controls["email"].status == "INVALID"){

      alert("Email is invalid");
      return;
    }

  }

}
