import {Component, OnInit} from '@angular/core';
import {DiaryEntry} from "../../models/diary-entry.model";
import {DiaryEntryService} from "../../services/diary-entry.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-diary-entry',
  templateUrl: './show-diary-entry.component.html',
  styleUrls: ['./show-diary-entry.component.css']
})
export class ShowDiaryEntryComponent implements OnInit {
  public diaryEntry!: DiaryEntry;
  constructor(private diaryEntryService: DiaryEntryService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.diaryEntry = this.activatedRoute.snapshot.data['diaryEntry'];
  }

}
