import { Component, OnInit } from '@angular/core';
import { Lightbox,LightboxEvent, LIGHTBOX_EVENT  } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title = 'Gallery | Tarek Rida';
  albums : any[]= [
    {src : '../assets/gallery/image1.jpg',
    caption: ''
  },
    {src :   '../assets/gallery/image2.jpg',
    caption: ''},
    
    {src :   '../assets/gallery/image3.jpg',
    caption: ''},
    
    {src :   '../assets/gallery/image4.jpg',
    caption: ''},
    
    {src :   '../assets/gallery/image5.jpg',
    caption: ''},
    {src :   '../assets/gallery/image6.jpg',
    caption: ''},
    {src :   '../assets/gallery/image7.jpg',
    caption: ''},
    {src :   '../assets/gallery/image8.jpg',
    caption: ''},
    {src :   '../assets/gallery/image9.jpg',
    caption: ''},
     {src :   '../assets/gallery/image10.jpg',
    caption: ''},
    {src :   '../assets/gallery/image11.jpg',
    caption: ''},
    {src :   '../assets/gallery/image12.jpg',
    caption: ''},

    {src :   '../assets/gallery/image13.jpg',
    caption: ''},
    {src :   '../assets/gallery/image14.jpg',
    caption: ''},
    {src :   '../assets/gallery/image15.jpg',
    caption: ''},
    {src :   '../assets/gallery/image16.jpg',
    caption: ''},
    {src :   '../assets/gallery/image17.jpg',
    caption: ''},
    {src :   '../assets/gallery/image18.jpg',
    caption: ''},
      {src :   '../assets/gallery/image19.jpg',
    caption: ''},
    {src :   '../assets/gallery/image20.jpg',
    caption: ''},
      {src :   '../assets/gallery/image21.jpg',
    caption: ''},
    {src :   '../assets/gallery/image22.jpg',
    caption: ''},
      {src :   '../assets/gallery/image23.jpg',
    caption: ''},
    {src :   '../assets/gallery/image24.jpg',
    caption: ''}
  
  ];
  private _subscription: Subscription;
  constructor(private _lightbox: Lightbox, private _lightboxEvent: LightboxEvent, private titleSer: Title) {
  //   for (let i = 1; i <= 2; i++) {
  //     const src = '../assets/image' + i + '.jpg';
  //     const caption = 'Image ' + i + ' caption here';
  // //    const thumb = '../assets/image' + i + '-thumb.jpg';
  //     // const album = {
  //     //    src: src,
  //     //     caption: caption
  //     //  //  thumb: thumb
  //     // };

  //     //  this.albums.push(album);
  //   }
  }
  open(index: number): void {
    // register your subscription and callback whe open lightbox is fired
    // open lightbox
     this._lightbox.open(this.albums, index);
    this._subscription = this._lightboxEvent.lightboxEvent$
      .subscribe(event => this._onReceivedEvent(event));
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  private _onReceivedEvent(event: any): void {
    // remember to unsubscribe the event when lightbox is closed
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      // event CLOSED is fired
      this._subscription.unsubscribe();
    }

    if (event.id === LIGHTBOX_EVENT.OPEN) {
      // event OPEN is fired
    }

    if (event.id === LIGHTBOX_EVENT.CHANGE_PAGE) {
      // event change page is fired
    //  console.log(this.albums.length); 
      // if (event.data >= this.albums.length -1 ) {
      //   // console.log('nnnnnnn'); 
      // }
     // console.log(event.data); // -> image index that lightbox is switched to
    }
  }
  ngOnInit() {
    this.titleSer.setTitle(this.title);
  }

}
