import { Component } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
  scrollImages(direction: string): void {
    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
    const scrollAmount = scrollWrapper.offsetWidth;

    if (direction === 'left') {
      scrollWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      scrollWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
