import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PnpVoterComponent } from './pnp-voter/pnp-voter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PnpVoterComponent],
  exports: [PnpVoterComponent]
})
export class PepNoPepModule { }
