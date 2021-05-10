import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import { ServiceComponent } from './component/service/service.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
