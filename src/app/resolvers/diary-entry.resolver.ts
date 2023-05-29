import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DiaryEntry} from "../models/diary-entry.model";
import {Observable} from "rxjs";
import {DiaryEntryService} from "../services/diary-entry.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DiaryEntryResolver implements Resolve<DiaryEntry>{
  constructor(private diaryEntryService: DiaryEntryService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DiaryEntry> | Promise<DiaryEntry> | DiaryEntry {
    const id: string = route.paramMap.get('id')!;
    return this.diaryEntryService.getDiaryEntry(+id);
  }

}
