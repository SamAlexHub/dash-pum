import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="sidebar-header">
          <h2>Admin Dashboard</h2>
        </div>
        <div class="sidebar-menu">
          <div class="menu-item">Dashboard</div>
          <div class="menu-item">Users</div>
          <div class="menu-item">Products</div>
          <div class="menu-item">Orders</div>
          <div class="menu-item">Settings</div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <header class="header">
          <h1>Dashboard Overview</h1>
        </header>

        <main class="dashboard-content">
          <div class="stats-grid">
            <div class="card">
              <h3>Total Users</h3>
              <p>1,234</p>
            </div>
            <div class="card">
              <h3>Total Orders</h3>
              <p>856</p>
            </div>
            <div class="card">
              <h3>Revenue</h3>
              <p>$45,678</p>
            </div>
            <div class="card">
              <h3>Active Users</h3>
              <p>456</p>
            </div>
          </div>

          <div class="card">
            <h3>Recent Activity</h3>
            <ul>
              <li>New order #12345 received</li>
              <li>User John Doe updated their profile</li>
              <li>New product added to inventory</li>
              <li>Payment received for order #12344</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class App {
  title = 'Admin Dashboard';
}

bootstrapApplication(App);