import { Inject, inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Title } from './title.model';

@Injectable({ providedIn: 'root' })
export class TitleService {
  getTitles(): Observable<Title[]> {
    return of([
      { name: 'Mr', isDefault: false },
      { name: 'Mrs', isDefault: false },
      { name: 'Miss', isDefault: false },
      { name: '!', isDefault: false },
      { name: 'Dr', isDefault: true },
    ]);
  }
}
