import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapPepComponent } from './tap-pep/tap-pep.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TapPepComponent],
  exports: [TapPepComponent]
})
export class TapPepModule { }
