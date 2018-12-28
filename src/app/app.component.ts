import { Component } from '@angular/core';
import { ModeService } from './core/mode.service';
import { ANNOTATION_MODES } from './core/models/annotation-modes.model';

@Component({
  selector: 'gk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gardner keeper';
  public currentMode: ANNOTATION_MODES;
  public ANNOTATION_MODES = ANNOTATION_MODES;

  constructor(public modeService: ModeService) {
    modeService.$mode.subscribe(mode => this.currentMode = mode);
  }
}
