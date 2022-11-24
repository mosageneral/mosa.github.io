import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  allProjects;
  title = 'Projects | Tarek Rida';
  constructor(private projectsSer: ProjectsService, private titleService: Title) {
    this.allProjects = this.projectsSer.projects;
    // console.log("is" + this.allProjects[1])
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
