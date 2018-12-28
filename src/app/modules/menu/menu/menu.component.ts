import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/core/mode.service';
import { ANNOTATION_MODES } from 'src/app/core/models/annotation-modes.model';

@Component({
  selector: 'gk-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public ANNOTATION_MODES = ANNOTATION_MODES;
  constructor(public modeService: ModeService) { }
  ngOnInit() {
  }
}
