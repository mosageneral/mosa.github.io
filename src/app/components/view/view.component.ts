import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
projectId;
changeparam;
projectItem;

  constructor(private route: ActivatedRoute,
     private projectSer: ProjectsService,
      private router: Router,
      private titleSer: Title) { }

  ngOnInit() {
 
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('id'));
    // });
    this.projectId = this.route.snapshot.paramMap.get('id');
  // console.log(this.projectId);

    if (this.projectSer.projects[this.projectId] === undefined ) {
      this.router.navigateByUrl('/Portfolio');
    } else {
      this.projectItem = this.projectSer.projects[this.projectId];
    }
    this.titleSer.setTitle(this.projectItem.title +' | Tarek Rida');
    // // if (this.projectSer.projects[this.projectId] === undefined ) {
    // //   this.router.navigateByUrl('/Portfolio');
    // // } else {
    // //   this.project_item = this.projectSer.projects[this.projectId];
    // // }
    // console.log(this.projectSer.projects[this.projectId]);
    // console.log(this.project_item);
  }

}
