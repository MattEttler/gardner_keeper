import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { PepNoPepModule } from './modules/pep-no-pep/pep-no-pep.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PepNoPepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
