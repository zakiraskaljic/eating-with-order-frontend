import {Component, OnInit} from '@angular/core';
import {DiaryEntryService} from "../services/diary-entry.service";
import {CalendarEvent, CalendarView} from "angular-calendar";
import { setMonth } from 'date-fns';
import {Router} from "@angular/router";
@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit{
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  constructor(private diaryEntryService: DiaryEntryService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.diaryEntryService.getDiaryEntries().map(entry => {
      const event: CalendarEvent = {
        id: entry.id,
        start: entry.date,
        title: entry.title,
      };
      return event as CalendarEvent;
    });
  }
  previousMonth(): void {
    this.viewDate = setMonth(this.viewDate, this.viewDate.getMonth() - 1);
  }

  nextMonth(): void {
    this.viewDate = setMonth(this.viewDate, this.viewDate.getMonth() + 1);
  }

  navigateToDiaryEntry(id: string | number | undefined) {
    if (id) {
      this.router.navigateByUrl('diary-entry/' + id);
    }
  }
}
