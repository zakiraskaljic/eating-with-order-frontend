import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
import {CreateDiaryComponent} from "./diary-entry/create-diary/create-diary.component";
import {CalendarPageComponent} from "./calendar-page/calendar-page.component";
import {HotlineComponent} from "./hotline/hotline.component";
import {PetsComponent} from "./pets/pets.component";
import {ShowDiaryEntryComponent} from "./diary-entry/show-diary-entry/show-diary-entry.component";
import {DiaryEntryResolver} from "./resolvers/diary-entry.resolver";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotline', component: HotlineComponent },
  { path: 'test', component: TestComponent },
  { path: 'create-diary', component: CreateDiaryComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'diary-entry/' + ':id',
    component:ShowDiaryEntryComponent,
    resolve: {
    'diaryEntry': DiaryEntryResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
