import {NgModule} from '@angular/core';

import {AnimalsComponent} from './animals.component';
import {FilterPipe} from '../../pipes/filter.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AnimalsComponent,
    FilterPipe
  ],
  providers: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AnimalsComponent
  ],
  bootstrap: [AnimalsComponent]
})
export class AnimalsModule { }
