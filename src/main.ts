import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from "./header/header.component";
import { provideRouter, Route } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DashHomeComponent } from "./dash-home/dash-home.component";
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar>

      <!-- Main Content -->
      <div class="main-content">
       <app-header></app-header>  
     
        <main class="dashboard-content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,

  imports: [SidebarComponent, HeaderComponent, RouterOutlet]
})


export class App {
  title = 'Admin Dashboard';
}

const routes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect to main page
  { path: 'dashboard', component: DashHomeComponent },
  { path: 'users', loadComponent:() => import('./users/users.component').then(m => m.UsersComponent) }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});