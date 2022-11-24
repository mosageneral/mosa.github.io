import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ViewComponent } from './components/view/view.component';
import { ServicesComponent } from './components/services/services.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { GalleryComponent } from './components/portfolio/gallery/gallery.component';


const routes: Routes = [
  { path: '', component: HomeComponent , data: {index: 0}},
  { path: 'skills', component: SkillsComponent , data: {index: 1}},
  { path: 'Portfolio', component: PortfolioComponent , data: {index: 2}},
  {path: 'Portfolio/view/:id/:projectname', component: ViewComponent , data: {index: 3}},
  {path: 'services', component: ServicesComponent, data: {index: 4}},
  {path: 'experience', component: ExperienceComponent , data: {index: 5}},
  {path: 'Portfolio/gallery', component: GalleryComponent , data: {index: 6}},
  { path: '**' , component: HomeComponent , data: {index: 7}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
