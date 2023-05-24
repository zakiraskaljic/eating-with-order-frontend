import { Injectable } from '@angular/core';
import {Question} from "../models/question.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions: Question[] = [
    { id: 1, question:'Do you often worry about your body weight or shape?'},
    { id:2, question: 'Do you engage in strict dieting or restrictive eating patterns?'},
    { id:3, question: 'Have you ever made yourself vomit or used laxatives to control your weight?'},
    { id:4, question:'Do you experience intense fear of gaining weight or becoming fat?'},
    { id:5, question: 'Have you lost a significant amount of weight recently?'}
  ];

  constructor() { }
  getQuestions(): Observable<Question[]> {
    return of(this.questions);
  }
}
