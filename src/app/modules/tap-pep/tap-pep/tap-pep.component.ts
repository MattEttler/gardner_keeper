import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/core/subject.service';
import { Subject } from 'src/app/core/models/subject.model';
import { flatMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'gk-pnp-voter',
  templateUrl: './pnp-voter.component.html',
  styleUrls: ['./pnp-voter.component.scss']
})
export class TapPepComponent implements OnInit {
  public subject: Subject;
  private aspectRatio: number;
  constructor(private _subjectService: SubjectService) { }

  ngOnInit() {
    this.aspectRatio = window.innerWidth / window.innerHeight;
    this._subjectService.getRandomSubject().subscribe(subject => {
      this.subject = subject;
    });
    console.log(this.aspectRatio);
    console.log();
  }

  getClick(event) {
    console.log(event);
    this._subjectService.tagSubject(this.subject.subjectId, this.subject.featureId,
      {
        width: 50,
        height: 50,
        xpos: (event.pageX - event.target.offsetLeft) - 50,
        ypos: (event.pageY - event.target.offsetTop) - 50
      }).subscribe(() => { });
    this._subjectService.getRandomSubject()
      .subscribe(subject => {
        this.subject = subject;
      });
  }

}
