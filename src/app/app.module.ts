import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KomentaraiComponent } from './komentarai/komentarai.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KomentaraiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
