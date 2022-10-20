import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rentacar';
  user: string = 'Yunus Emre Onen';
 
}
