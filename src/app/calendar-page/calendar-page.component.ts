import {Component, OnInit} from '@angular/core';
import {DiaryEntryService} from "../services/diary-entry.service";
import {CalendarEvent, CalendarView} from "angular-calendar";
@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit{

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: { date: Date; text: string; title: string }[] = [];

  constructor(private diaryEntryService: DiaryEntryService) {}

  ngOnInit(): void {
    this.events = this.diaryEntryService.getDiaryEntries().map(entry => ({
      title: entry.title,
      text: entry.text,
      date: entry.date
    }));
  }
}
