import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// Rutas
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    PagenotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
