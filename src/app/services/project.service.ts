import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectGet } from '../models/project-get';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(){

    const url = "http://localhost:9090/api/projects/get/all";

    return this.http.get<ProjectGet[]>(url);
  }

  createProject(project: any, token: any){

    const url = "http://localhost:9090/api/projects/create";

    return this.http.post(url, project, {headers: new HttpHeaders().set("token", token)});
  }

  getProjectById(id : any){

    const url = "http://localhost:9090/api/projects/get?id=" + id;

    return this.http.get<ProjectGet>(url);

  }
  
}
