import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './home/pages/settings/settings.component';
import { EmployeePortalComponent } from './home/pages/employee-portal/employee-portal.component';
import { SignComponent } from './home/pages/sign/sign.component';
import { MessagesComponent } from './home/pages/messages/messages.component';
import { ProjectsComponent } from './home/pages/projects/projects.component';
import { InformsComponent } from './home/pages/informs/informs.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path:'',component: EmployeePortalComponent},
      { path: 'settings', component: SettingsComponent },
      { path: 'employee', component: EmployeePortalComponent },
      { path: 'sign', component: SignComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'informs', component: InformsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
