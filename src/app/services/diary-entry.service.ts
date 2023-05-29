import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {DiaryEntry} from "../models/diary-entry.model";

@Injectable({
  providedIn: 'root'
})
export class DiaryEntryService {

  private entries : DiaryEntry[] = [
    { id: 1, title: 'Entry 1', text: 'Everything is good', date: new Date('2023-05-12') },
    { id: 2, title: 'Entry 2', text: 'Everything is bad', date: new Date('2023-05-20') },
    { id: 3, title: 'Entry 3',text: 'Ok', date: new Date('2023-05-13') },
    { id: 4, title: 'Entry 4',text: 'Ok', date: new Date('2023-04-12') },
    { id: 5, title: 'Entry 5',text: 'Ok', date: new Date('2023-04-11') },
    { id: 6, title: 'Entry 6',text: 'Ok', date: new Date('2023-05-13') },
  ];

  constructor() { }
  getDiaryEntries(): DiaryEntry[] {
    return this.entries;
  }
  getDiaryEntry(id: number): Observable<DiaryEntry> {
    const entry = this.entries.find((entry) => entry.id === id);
    if (entry) {
      return of(entry);
    } else {
      throw new Error(`Diary entry with ID ${id} not found.`);
    }
  }
}
