import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormModule} from './components/form/form.module';
import {AnimalsModule} from './components/animals/animals.module';
import {HttpClientModule} from '@angular/common/http';
import {JokesModule} from './components/jokes/jokes.module';
import {AppRoutingModule} from './routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormModule,
    NgbModule,
    AnimalsModule,
    JokesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
