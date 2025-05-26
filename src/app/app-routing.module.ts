// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Assignment/header/header.component';
import { AboutMeComponent } from './Assignment/about-me/about-me.component';
import { MyProjectsComponent } from './Assignment/my-projects/my-projects.component';
import { MySkillsComponent } from './Assignment/my-skills/my-skills.component';
import { ContactComponent } from './Assignment/contact/contact.component';
import { LifecycleComponent } from './Assignment/lifecycle/lifecycle.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'my-skills', component: MySkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path:'header',component:HeaderComponent},
  { path:'lifecycle',component:LifecycleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

