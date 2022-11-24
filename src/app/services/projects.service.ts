import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
projects: Array<Project> = [
  {
    title: 'Mena Tech Ecosystem',
    pageparm: 'menatech',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/menatech_full.jpg',
    dateFrom: '1 Apr 2019',
    dateTo: 'present',
    liveDemo: 'https://menatechecosystem.com',
    technologies: ['Html','Css','bootstrap','JavaScript', 'Jquery','font awesome','select2','slick slider',
    'city state js','fullcalendar js','Chart js','picker date js','intlTelInput js']
  },
  {
    title: 'ISG | Integrated solutions Gate',
    pageparm: 'isg',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/isg_full.jpg',
    dateFrom: '23 Feb 2019',
    dateTo: '03 Mar 2019',
    liveDemo: 'https://isg.netlify.com',
    technologies: ['Html','Css','bootstrap', 'Jquery','font awesome','owl carousel','jquery localize','mixitup']
  },
  {
    title: 'Task Manager ( Angular ) ',
    pageparm: 'taskmanager-angular',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/angular_task_manager.jpg',
    dateFrom: '10 Jun 2018',
    dateTo: '10 Jun 2018',
    liveDemo: 'https://task-manger-33ddb.web.app',
    technologies: ['Html','Css','bootstrap', 'Angular']
  },
  {
    title: 'Simple Shopping Cart ( Angular )',
    pageparm: 'shoppingcart',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/shopapp.jpg',
    dateFrom: '2 Feb 2019',
    dateTo: '13 Feb 2019',
    liveDemo: 'https://tarekrida1.github.io/shopapp'
  },
  {
    title: 'Tech Planet Template ( Angular )',
    pageparm: 'techplanet',
    description: 'Not Completed Yet!',
    fullImg: '../../../assets/imgs/portfolio/techplanet_full.jpg',
    dateFrom: '19 Feb 2019',
    dateTo: '1 Mar 2019',
    liveDemo: 'https://techplaneet.firebaseapp.com'
  },
  {
    title: 'ToDo list',
    pageparm: 'todolist',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/todo_list.jpg',
    dateFrom: '19 May 2018',
    dateTo:  '19 May 2018',
    liveDemo: 'https://tarekrida1.github.io/todo',
    technologies: ['Html','Css','bootstrap', 'JS']
  },
  {
    title: 'Dice Game',
    pageparm: 'dice-game',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/dice-game.jpg',
    dateFrom: '14 Jun 2019',
    dateTo: '17 Jun 2019',
    liveDemo: 'https://tarekrida1.github.io/dice-game',
    technologies: ['Html','Css', 'JS']
  },
  {
    title: 'Courses Template',
    pageparm: 'techplanet',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/course_full.jpg',
    dateFrom: '19 Feb 2019',
    dateTo: '1 Mar 2019',
    liveDemo: 'https://tarekrida1.github.io/page_task'
  },
  {
    title: 'Agency Template ( Bootstrap 4 Training )',
    pageparm: 'agencyatemplate',
    description: 'there is no description now! Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
    fullImg: '../../../assets/imgs/portfolio/bootstrap4.jpg',
    dateFrom: '28 Apr 2018',
    dateTo: '27 Jun 2018',
    liveDemo: 'https://tarekrida1.github.io/bootstrab4'
  }
];
  constructor() { }

//
}
