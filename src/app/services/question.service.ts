import { Injectable } from '@angular/core';
import {Question} from "../models/question";
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
    { id:5, question: 'Have you lost a significant amount of weight recently?'},
    { id:6, question:'Do you frequently check your body weight or measurements?' },
    { id:7, question: 'Do you avoid certain types of food or food groups?'},
    { id:8, question: 'Do you exercise excessively to control your weight?'},
    { id:9, question: 'Do you feel guilty or ashamed after eating?'},
    { id:10, question: 'Do you have distorted body image or perceive yourself as overweight even when others say you are thin?' }
  ];

  constructor() { }
  getQuestions(): Observable<Question[]> {
    return of(this.questions);
  }
}
