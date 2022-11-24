import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  isChecked;
  currentcom;
  @HostListener("document:scroll", [])
  onWindowScroll() {
  (window.pageYOffset > 30) ? this.scrolled = true : this.scrolled = false 
 
}
  constructor(private _router: Router,) {
    // const url: Observable<string> = act.url.pipe(map(segments => segments.join('')));
    // console.log(url)
  //   router.events.subscribe((event) => {
  //     this.currentcom = event.url;
      
  //     // console.log(event.url);
  // });
  //     console.log(this.currentcom)
   }

  ngOnInit() {
    this._router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.currentcom = e.url;
        // console.log(e.url);
        console.log(this.currentcom);
      }
    });
  }

}
