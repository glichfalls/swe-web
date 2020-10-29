import {NgModule} from '@angular/core';

import {FormComponent} from './form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  providers: [],
  imports: [
    FormsModule
  ],
  exports: [
    FormComponent
  ],
  bootstrap: [FormComponent]
})
export class FormModule { }
