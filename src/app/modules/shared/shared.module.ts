import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { TileContainerComponent } from './tile-container/tile-container.component';
import { SubjectWindowComponent } from './subject-window/subject-window.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TileComponent, TileContainerComponent, SubjectWindowComponent],
  exports: [TileComponent, SubjectWindowComponent]
})
export class SharedModule { }
