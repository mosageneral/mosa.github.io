import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, query, group, style, animate } from '@angular/animations';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeranimate', [
      transition(
        '* <=> *'
      , [
        group([
          query(':enter', [
            style({
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              opacity: '0',
              // transform: 'translateX(100%)'
            }),
            animate(500, style({
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              opacity: '1',
              // transform: 'translateX(0)'

            }))
          ],  { optional: true }),
          query(':leave', [
            style({
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              opacity: '1',
              // transform: 'translateX(-100%)'
            }),
            animate(500, style({
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              opacity: '0',
              // transform: 'translateX(0)'
            }))
          ],  { optional: true })
        ])
      ])
    ])
  ]
  // animations: [
  //   trigger('routeranimate', [
  //     transition(
  //       '* <=> *'
  //     , [
  //       group([
  //         query(':enter', [
  //           style({
  //               transform: 'translateX(100%)'
  //           }),
  //           animate(500, style({
  //             transform: 'translateX(0)'
  //           }))
  //         ]),
  //         query(':leave', [
  //           style({
  //               transform: 'translateX(0)'
  //           }),
  //           animate(500, style({
  //             transform: 'translateX(-100%)'
  //           }))
  //         ])
  //       ])
  //     ])
  //   ])
  // ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Mosa Hasn';
 
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;
  subscriptions: Subscription[] = [];
  connectionStatusMessage: string;
  connectionStatus: string;
  // animateState;
  status = true;

  constructor() {
    // console.log(routeee.snapshot.data['title'])
  }
  hideShow() {
    this.status = !this.status;
}
 ngOnInit(): void {
 
   this.onlineEvent = fromEvent(window, 'online');
   this.offlineEvent = fromEvent(window, 'offline');

   this.subscriptions.push(this.onlineEvent.subscribe(e => {
     this.connectionStatusMessage = 'Back to online';
     this.connectionStatus = 'online';
     this.status = true;
     setTimeout(function() {
      this.status = false;
  }.bind(this), 3000);
     // console.log(this.connectionStatusMessage);

   }));

   this.subscriptions.push(this.offlineEvent.subscribe(e => {
     this.connectionStatusMessage = 'Connection lost!You are not connected to internet';
     this.connectionStatus = 'offline';
     this.status = true;
     // console.log(this.connectionStatusMessage);
   }));
 }

 ngOnDestroy(): void {
   this.subscriptions.forEach(subscription => subscription.unsubscribe());
 }
}
