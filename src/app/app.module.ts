import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './MyComponents/hello-angular/hello-angular.component';
import { EmployeeComponent } from './MyComponents/employee/employee.component';
// import { first } from 'rxjs';
// import { FirstComponent } from '../modules/first.components';
import { SideComponent } from '../modules/side.components';
import { FormsModule } from '@angular/forms';
import { FirstModule } from '../modules/first/first.module';
import { DisplayComponent } from './MyComponents/display/display.component';
import { BindingComponent } from './MyComponents/binding/binding.component';
import { UserProfileComponent } from './MyComponents/user-profile/user-profile.component';
import { CompComponent } from './MyComponents/comp/comp.component';
import { ProperyBindingComponent } from './MyComponents/propery-binding/propery-binding.component';
import { HeaderComponent } from './Assignment/header/header.component';
import { AboutMeComponent } from './Assignment/about-me/about-me.component';
import { MyProjectsComponent } from './Assignment/my-projects/my-projects.component';
import { MySkillsComponent } from './Assignment/my-skills/my-skills.component';
import { ContactComponent } from './Assignment/contact/contact.component';
import { LifecycleComponent } from './Assignment/lifecycle/lifecycle.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    EmployeeComponent,
    DisplayComponent,
    BindingComponent,
    UserProfileComponent,
    CompComponent,
    ProperyBindingComponent,
    HeaderComponent,
    AboutMeComponent,
    MyProjectsComponent,
    MySkillsComponent,
    ContactComponent,
    LifecycleComponent,
    // FirstComponent,
    // SideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
