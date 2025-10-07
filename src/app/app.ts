// src/app/app.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './popup/popup';           // Import the Popup component
import { CasinoListComponent } from './casino-list/casino-list'; // Import the main list component

@Component({
  selector: 'app-root',
  standalone: true,
  // Declare all standalone components used in this template
  imports: [CommonModule, PopupComponent, CasinoListComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // State variable to control the visibility of the popup
  // It starts as TRUE to show the popup immediately upon page load.
  showPopup: boolean = true; 

  title = 'casino-project'; // Internal title

  /**
   * Method called when the popup component emits the 'timerFinished' event.
   * This handles hiding the popup and revealing the main page content.
   */
  handleTimerFinished(): void {
    console.log('Popup timer finished or CTA clicked. Hiding popup, showing main content.');
    this.showPopup = false;
  }
}