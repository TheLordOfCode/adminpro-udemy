import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { 
  path: '', 
  component: PagesComponent, 
  children:[
   
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component:  ProgressComponent},
    { path: 'graficas1', component:  Graficas1Component},
    { path: '', redirectTo: '/dashboard', pathMatch: "full"  }
  ]
},
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent  },
  
 // { path: '', redirectTo: '/dashboard', pathMatch: "full"  },
  { path: '**', component: PagenotfoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }