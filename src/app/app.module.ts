import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { TestComponent } from './test/test.component';
import {CommonModule} from "@angular/common";
import {QuestionService} from "./services/question.service";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateDiaryComponent } from './create-diary/create-diary.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import {DiaryEntryService} from "./services/diary-entry.service";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TestComponent,
    CreateDiaryComponent,
    CalendarPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [
    QuestionService,
    DiaryEntryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
