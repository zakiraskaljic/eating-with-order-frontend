import {Component, OnInit} from '@angular/core';
import {DiaryEntry} from "../models/diary-entry.model";
import {DiaryEntryService} from "../services/diary-entry.service";
@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit{
  currentMonth: Date = new Date();
  weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  private diaryEntries : DiaryEntry[] = [];

  constructor(private diaryEntryService: DiaryEntryService) {}

  ngOnInit(): void {
    this.fetchDiaryEntries();
  }

  fetchDiaryEntries(): void {
    this.diaryEntryService.getDiaryEntries().subscribe(
      entries => {
        this.diaryEntries = entries;
      },
      error => {
        console.error('Failed to fetch diary entries', error);
      }
    );
  }

  get calendarDays(): Date[] {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const days: Date[] = [];

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const date = new Date(year, month, i);
      days.push(date);
    }

    return days;
  }

  previousMonth(): void {
    const currentYear = this.currentMonth.getFullYear();
    const currentMonth = this.currentMonth.getMonth();

    if (currentMonth === 0) {
      this.currentMonth = new Date(currentYear - 1, 11, 1);
    } else {
      this.currentMonth = new Date(currentYear, currentMonth - 1, 1);
    }

    this.fetchDiaryEntries();
  }

  nextMonth(): void {
    const currentYear = this.currentMonth.getFullYear();
    const currentMonth = this.currentMonth.getMonth();
    const currentDate = new Date();

    if (currentYear > currentDate.getFullYear() || (currentYear === currentDate.getFullYear() && currentMonth >= currentDate.getMonth())) {
      return;
    }

    if (currentMonth === 11) {
      this.currentMonth = new Date(currentYear + 1, 0, 1);
    } else {
      this.currentMonth = new Date(currentYear, currentMonth + 1, 1);
    }

    this.fetchDiaryEntries();
  }

  getDiaryEntriesForDay(date: Date): DiaryEntry[] {
    return this.diaryEntries.filter(entry => entry.date.toDateString() === date.toDateString());
  }
}
