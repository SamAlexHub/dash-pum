import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  constructor(private router: Router) { }
  navigate(url: string) {
    switch (url) {
      case 'dashboard':
        this.router.navigate(['dashboard']);
        break;
      case 'users':
        this.router.navigate(['users']);
    }
  }
}
