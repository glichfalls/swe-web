import {NgModule} from '@angular/core';

import {JokesComponent} from './jokes.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    JokesComponent
  ],
  providers: [],
  imports: [
    CommonModule
  ],
  exports: [
    JokesComponent
  ],
  bootstrap: [JokesComponent]
})
export class JokesModule { }
