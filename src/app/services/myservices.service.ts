import { Injectable } from '@angular/core';
import { Myservices } from '../interfaces/myservices';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
myservices: Array<Myservices> = [
  {
    serviceTitle: 'Web Design',
    serviceIcon: '<i class="fas fa-desktop"></i>',
    serviceDesc: 'I Can Create And Design Your Dreams Wesbite!'
  },
  {
    serviceTitle: 'Fully Responsive',
    serviceIcon: '<i class="fas fa-mobile-alt"></i>',
    serviceDesc: 'My Web Designs Are Fully Responsive And Friendly On Any Kind Of Screens.'
  },
  {
    serviceTitle: 'Clean Code',
    serviceIcon: '<i class="fas fa-code"></i>',
    serviceDesc: 'Will Find it So Easy To Edit, Maintain, Or Even Adding On My Code!'
  },
  {
    serviceTitle: 'Fixing errors',
    serviceIcon: '<i class="fas fa-terminal"></i>',
    serviceDesc: 'You can contact me via email to find all support.'
  },
  {
    serviceTitle: 'Dynamic',
    serviceIcon: '<i class="fas fa-terminal"></i>',
    serviceDesc: 'Websites don\'t have to be static, I love making pages come to life.'
  },
  {
    serviceTitle: 'Branding',
    serviceIcon: '<i class="fab fa-atlassian"></i>',
    serviceDesc: 'I Can Create The Wonderful logo for you with Super Quality.'
  }
];
  constructor() { }
}
