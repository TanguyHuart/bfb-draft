import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone : true,
  template: `
    <body class="body">
    <header class="brand-name">
      <a href="/">
      <img class="bfb-logo" src="assets/bfb-logo.png" alt="bfb-logo">
      </a>

    </header>
    <main class="content">
      <app-home></app-home>
    </main>
  </body>
  `,
  styleUrl: './app.component.css',
  imports : [HomeComponent]
})
export class AppComponent {
  title = 'bfb-draft';
}
