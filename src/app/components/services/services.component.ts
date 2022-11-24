import { Component, OnInit } from '@angular/core';
import { MyservicesService } from 'src/app/services/myservices.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  allServices;
  title = "Services | Tarek Rida";
  constructor(private services: MyservicesService, private titleSer: Title) {
    this.allServices = this.services.myservices;
   }

  ngOnInit() {
    this.titleSer.setTitle(this.title);
  }

}
