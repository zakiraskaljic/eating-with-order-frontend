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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TestComponent,
    CreateDiaryComponent,
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
  ],
  providers: [
    QuestionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
