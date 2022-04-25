import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectcompleteComponent } from './components/projectcomplete/projectcomplete.component';
import { ProjectcreationComponent } from './components/projectcreation/projectcreation.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path:'',
    redirectTo:'projectlist',
    pathMatch: 'full' 
  },
  {
    path: "projectlist",
    component: ProjectlistComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "projectcreation",
    component: ProjectcreationComponent
  },
  {
    path: "projectcomplete",
    component: ProjectcompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
