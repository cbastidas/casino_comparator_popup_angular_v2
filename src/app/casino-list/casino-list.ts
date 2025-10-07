// src/app/casino-list/casino-list.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the interface for a casino entry for type safety
interface CasinoEntry {
  name: string;
  bonusText: string;
  logo: string;
  ctaText: string;
  isHeader?: boolean; // Flag for the header row
  isTelegram?: boolean; // Flag for the special Telegram row
}

@Component({
  selector: 'app-casino-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casino-list.html', // Note the name convention
  styleUrls: ['./casino-list.css'] // Note the name convention
})
export class CasinoListComponent {

  // Casino list data based on the provided Turkish text details
  readonly casinoData: CasinoEntry[] = [
    // Header Row (used for column titles)
    { name: 'Site', bonusText: 'Bonus', ctaText: 'Kayıt', logo: '', isHeader: true },
    
    // Data Rows
    { name: '', bonusText: '%300 Bonus', ctaText: 'Hemen Al', logo: 'hovarda.png' },
    { name: '', bonusText: '5.000 TL Bonus + 50 FSP + 500 TL Bedava Bonus', ctaText: 'Hemen Al', logo: 'winnit.png' },
    { name: '', bonusText: '5.000 TL Nakit İade', ctaText: 'Hemen Al', logo: 'discount-casino.png' },
    { name: '', bonusText: '5.000 TL Bonus + 300 FSP', ctaText: 'Hemen Al', logo: 'davegas.png' },
    { name: '', bonusText: '8.000 TL Bonus', ctaText: 'Hemen Al', logo: 'milyar.png' },
    
    // Telegram Row (Requires special styling)
    { 
      name: '', 
      bonusText: 'En güvenilir siteler ve kazandıran kampanyaları kaçırma!', 
      ctaText: 'Takip Et', 
      logo: 'telegram.png', 
      isTelegram: true 
    }
  ];
}