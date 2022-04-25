import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ProjectcreationComponent } from './components/projectcreation/projectcreation.component';
import { ProjectcompleteComponent } from './components/projectcomplete/projectcomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectlistComponent,
    SigninComponent,
    LoginComponent,
    ProjectcreationComponent,
    ProjectcompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
