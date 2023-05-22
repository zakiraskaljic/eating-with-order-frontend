import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}
  navigateTo(route: string) {
    switch (route) {
      case 'test':
        this.router.navigate(['test']);
        break;
      case 'create-diary':
        this.router.navigate(['create-diary']);
        break;
      }
  }
}
