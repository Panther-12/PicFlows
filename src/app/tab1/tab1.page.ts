import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  images = [
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Tropical Beach',
      description: 'A beautiful view of a tropical beach during sunset.'
    },
    {
      src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Mountain Landscape',
      description: 'Stunning mountain landscape with a clear blue sky.'
    },
    {
      src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      title: 'Cityscape at Night',
      description: 'A bustling cityscape captured at night with bright lights.'
    },
    {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      title: 'Forest Pathway',
      description: 'A serene forest pathway surrounded by lush greenery.'
    },
    {
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      title: 'Desert Dunes',
      description: 'Golden sand dunes under a clear blue sky in the desert.'
    },
    {
      src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      title: 'Snowy Mountains',
      description: 'Majestic snowy mountains with a beautiful sunrise.'
    }
  ];

  constructor() {}

}
