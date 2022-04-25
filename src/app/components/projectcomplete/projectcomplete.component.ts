import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-projectcomplete',
  templateUrl: './projectcomplete.component.html',
  styleUrls: ['./projectcomplete.component.css']
})
export class ProjectcompleteComponent implements OnInit {

  project : any = null;
  projectId = null;
  isProjectsLoaded : boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private projectService : ProjectService) { }

  ngOnInit(): void {

    this.getProjectIdFromURL();

    this.loadProject();
  }

  getProjectIdFromURL(){

    this.route.queryParams
      .subscribe( (params : any) => {
        this.projectId = params.id;
      }
    );

    if(this.projectId == null)
      this.router.navigate(['/projectlist']);
    
  }

  async loadProject(){

    await this.projectService.getProjectById(this.projectId).subscribe({
      next : (resp) => {
        this.project = resp;
        this.isProjectsLoaded = true;
      },
      error : (rej) => {
        alert("Something went wrong...");
      }
    });
  }
  
  savePDF(): void {

    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('NFTINFO.pdf');
    });
  }

}
