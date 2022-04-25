import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projectcreation',
  templateUrl: './projectcreation.component.html',
  styleUrls: ['./projectcreation.component.css']
})
export class ProjectcreationComponent implements OnInit {

  jwt : String = "";

  form = new FormGroup({
    projectname : new FormControl('', Validators.required),
    projectdescription : new FormControl(''),
    urlwebsite : new FormControl('', Validators.required),
    urlimage : new FormControl('', Validators.required),
    urlvideo : new FormControl('', Validators.required),
    currentinvestment : new FormControl('', [
      Validators.required, Validators.min(0)]),
    pendinginvestment : new FormControl('', [
      Validators.required, Validators.min(0)]),
    totalinvestment : new FormControl('', [
      Validators.required, Validators.min(0)]),
    nativecurrency : new FormControl('', Validators.required),
    blockchainame : new FormControl('', Validators.required),
    creationdate : new FormControl('', Validators.required),
    testingdate : new FormControl('', Validators.required),
    releasedate : new FormControl('', Validators.required)
  });

  constructor(private projectService : ProjectService,
              private cookies : CookieService,
              private router: Router) { }

  ngOnInit(): void {

    this.jwt = this.cookies.get("nftmtpauth");

    if(this.jwt.length == 0){

      alert("Its necessary to be logged in");
      this.router.navigate(['/projectlist']);
    }

  }

  onSubmit(){

    if(this.form.invalid){

      this.showAlert();
      return;
    }
    
    let userid = new FormControl(this.getUseridFromJWT());

    this.form.addControl("userid", userid);

    this.createProject();

  }

  async createProject(){

    await this.projectService.createProject(this.form.value, this.jwt).subscribe({
      next: (resp:any) => {
        alert("Project created succesfully");
        this.router.navigate(['/projectcomplete?id=' + resp.projectid]);
      },
      error: (rej) => {
        alert("Something goes wrong...");
      }
    });
  }

  showAlert() : void{

    if(this.form.controls["projectname"].status == "INVALID"){

      alert("Project name is invalid");
      return;
    }

    if(this.form.controls["urlwebsite"].status == "INVALID"){

      alert("URL website is invalid");
      return;
    } 

    if(this.form.controls["urlimage"].status == "INVALID"){

      alert("URL image is invalid");
      return;
    }

    if(this.form.controls["urlvideo"].status == "INVALID"){

      alert("URL video is invalid");
      return;
    }

    if(this.form.controls["currentinvestment"].status == "INVALID"){

      alert("Current investment is invalid");
      return;
    }

    if(this.form.controls["pendinginvestment"].status == "INVALID"){

      alert("Pending investment is invalid");
      return;
    }

    if(this.form.controls["totalinvestment"].status == "INVALID"){

      alert("Total investment is invalid");
      return;
    }

    if(this.form.controls["nativecurrency"].status == "INVALID"){

      alert("Native currency is invalid");
      return;
    }

    if(this.form.controls["blockchainame"].status == "INVALID"){

      alert("Native currency is invalid");
      return;
    }

    if(this.form.controls["creationdate"].status == "INVALID"){

      alert("Creation date is invalid");
      return;
    }

    if(this.form.controls["testingdate"].status == "INVALID"){

      alert("Testing date is invalid");
      return;
    }

    if(this.form.controls["releasedate"].status == "INVALID"){

      alert("Release date is invalid");
      return;
    }

  }

  getUseridFromJWT(){
    
    let decodedJwt = JSON.parse(atob(this.jwt.split('.')[1]));

    return decodedJwt.Id;
  }

}
