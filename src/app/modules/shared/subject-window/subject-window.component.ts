import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'gk-subject-window',
  templateUrl: './subject-window.component.html',
  styleUrls: ['./subject-window.component.scss']
})
export class SubjectWindowComponent implements OnInit {
  public screenHeight: number;
  public screenWidth: number;
  public minTileSize: number;
  public tiles: Tile[];

  @Input() url: string;
  constructor() {
    this.tiles = [];
  }

  @HostBinding('style.width') width: Number = window.innerWidth;
  @HostBinding('style.height') height: Number = window.innerHeight;

  ngOnInit() {
    this.minTileSize = 70;
    this.determineWindowTiles();
  }

  determineWindowTiles() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    const tileColCount = Math.floor(this.screenWidth / this.minTileSize);
    const tileRowCount = Math.floor(this.screenHeight / this.minTileSize);
    const tileCount = tileRowCount * tileColCount;
    this.width = this.screenWidth;
    this.height = this.screenHeight;
    console.log(tileRowCount, tileColCount, tileCount, this.screenWidth);
    for (let x = 0; x < tileRowCount; x++) {
      for (let y = 0; y < tileColCount; y++) {
        this.tiles.push({
          x: x * this.minTileSize,
          y: y * this.minTileSize,
          width: 70,
          height: 70,
          selected: false
        });
      }
    }
  }

}
