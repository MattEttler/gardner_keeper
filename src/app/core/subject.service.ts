import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from './models/subject.model';
import { Tag } from './models/tag.model';

@Injectable({ providedIn: 'root' })
export class SubjectService {
  constructor(private httpClient: HttpClient) { }

  public getRandomSubject(): Observable<Subject> {
    return this.httpClient.get<Subject>(`${environment.somaApi}/subject/random`);
  }

  public tagSubject(subjectId: string, featureId: string, tag: Tag): Observable<Tag[]> {
    return this.httpClient.post<Tag[]>(`${environment.somaApi}/tag`, {
      subjectId: subjectId,
      featureId: featureId,
      xpos: tag.xpos,
      ypos: tag.ypos,
      width: tag.width,
      height: tag.height
    });
  }
}
