import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SubjectService } from 'src/app/core/subject.service';
import { Subject } from 'src/app/core/models/subject.model';
import { Rect } from 'src/app/core/models/rect.model';

@Component({
  selector: 'gk-pnp-voter',
  templateUrl: './pnp-voter.component.html',
  styleUrls: ['./pnp-voter.component.scss']
})
export class PnpVoterComponent implements OnInit, AfterViewInit {
  public subject: Subject;
  public xoffset: number;
  public yoffset: number;
  public visibleSubjectCoordinates: Rect;
  public viewPort: Rect;
  @ViewChild('subjectEl') subjectEl: ElementRef;
  @ViewChild('containerEl') containerEl: ElementRef;
  constructor(private _subjectService: SubjectService) { }

  ngOnInit() {
    this.newSubject();
  }

  ngAfterViewInit() {
    this.viewPort = {
      top: this.containerEl.nativeElement.offsetTop,
      bottom: this.containerEl.nativeElement.offsetHeight,
      left: this.containerEl.nativeElement.offsetLeft,
      right: this.containerEl.nativeElement.offsetWidth
    };
  }

  offsetSubject() {
    this.xoffset = Math.floor(Math.random() * 101) - 50;
    this.yoffset = Math.floor(Math.random() * 101) - 50;
  }

  newSubject() {
    this._subjectService.getRandomSubject()
      .subscribe(subject => {
        this.subject = subject;
        this.offsetSubject();
      });
  }

  getVisibleImgSection() {
    const subjectRect: Rect = {
      top: this.subjectEl.nativeElement.offsetTop,
      bottom: this.subjectEl.nativeElement.offsetTop + this.subjectEl.nativeElement.offsetHeight,
      left: this.subjectEl.nativeElement.offsetLeft,
      right: this.subjectEl.nativeElement.offsetLeft + this.subjectEl.nativeElement.offsetWidth
    };

    this.visibleSubjectCoordinates = {
      top: Math.max(this.viewPort.top, subjectRect.top) - subjectRect.top,
      bottom: Math.min(this.viewPort.bottom, subjectRect.bottom) - subjectRect.top,
      left: Math.max(this.viewPort.left, subjectRect.left) - subjectRect.left,
      right: Math.min(this.viewPort.right, subjectRect.right) - subjectRect.left
    };
  }

  tagSubject() {
    this._subjectService.tagSubject(this.subject.subjectId, this.subject.featureId,
      {
        width: this.visibleSubjectCoordinates.right - this.visibleSubjectCoordinates.left,
        height: this.visibleSubjectCoordinates.bottom - this.visibleSubjectCoordinates.top,
        xpos: this.visibleSubjectCoordinates.left,
        ypos: this.visibleSubjectCoordinates.top
      }).subscribe(() => { });
    this.newSubject();
  }

}
