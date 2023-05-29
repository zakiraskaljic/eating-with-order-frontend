import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-diary',
  templateUrl: './create-diary.component.html',
  styleUrls: ['./create-diary.component.css']
})
export class CreateDiaryComponent {
  currentDate: Date = new Date();

  constructor(private router:Router) {
  }
  navigateTo(route: string) {
    switch (route) {
      case '':
        this.router.navigate(['']);
        break;
    }
  }
}
