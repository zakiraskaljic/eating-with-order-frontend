import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../services/question.service";
import {Question} from "../models/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  questions: Question[] | undefined;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      });
  }

  navigateToHome() {
    this.router.navigate(['']);
  }
}
