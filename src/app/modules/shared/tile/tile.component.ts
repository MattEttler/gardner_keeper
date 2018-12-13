import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'gk-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() xPosition: number;
  @Input() yPosition: number;
  @Input() w: number;
  @Input() h: number;
  constructor() {

    console.log(this.w, this.h);

  }

  ngOnInit() {
  }

}
