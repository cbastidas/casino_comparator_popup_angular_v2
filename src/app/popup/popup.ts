// src/app/popup/popup.ts

import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.html',
  styleUrls: ['./popup.css']
})
export class PopupComponent implements OnInit, OnDestroy {
  // Output event emitted when the popup timer is complete (5 seconds)
  @Output() timerFinished = new EventEmitter<void>();

  // Total duration in milliseconds
  readonly DURATION_MS = 5000; 
  // Variable to hold the reference to the JavaScript timer
  private countdownTimer: any;

  // Initialize the component
  ngOnInit(): void {
    // Start the timer to hide the popup after 5 seconds
    this.countdownTimer = setTimeout(() => {
      // Emit the event to the parent component
      this.timerFinished.emit();
    }, this.DURATION_MS);
  }

  // Clear the timer when the component is destroyed to prevent memory leaks
  ngOnDestroy(): void {
    if (this.countdownTimer) {
      clearTimeout(this.countdownTimer);
    }
  }

  /**
   * Method to handle the CTA button click ("Bonusu Kap"). 
   * Clicking the button should immediately close the popup.
   */
  onCtaClick(): void {
    // Immediately clear the timer and emit the finish event
    if (this.countdownTimer) {
      clearTimeout(this.countdownTimer);
    }
    this.timerFinished.emit();
  }
}