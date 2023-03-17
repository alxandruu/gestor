import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './home/pages/settings/settings.component';
import { EmployeePortalComponent } from './home/pages/employee-portal/employee-portal.component';
import { SignComponent } from './home/pages/sign/sign.component';
import { MessagesComponent } from './home/pages/messages/messages.component';
import { ProjectsComponent } from './home/pages/projects/projects.component';
import { InformsComponent } from './home/pages/informs/informs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SettingsComponent,
    EmployeePortalComponent,
    SignComponent,
    MessagesComponent,
    ProjectsComponent,
    InformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
