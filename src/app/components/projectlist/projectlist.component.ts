import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectGet } from 'src/app/models/project-get';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  projects : ProjectGet[] = [];

  isProjectsLoaded : boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() : void {

    this.getProjects();
    
  }

  async getProjects() {

    await this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      this.isProjectsLoaded = true;
    });
  }

}
