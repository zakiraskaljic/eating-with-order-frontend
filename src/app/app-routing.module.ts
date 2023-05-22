import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
import {CreateDiaryComponent} from "./create-diary/create-diary.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'create-diary', component:CreateDiaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
