import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
title = "Experience | Tarek Rida";
  constructor(private titleSer: Title) { }

  ngOnInit() {
    this.titleSer.setTitle(this.title);
  }

}
