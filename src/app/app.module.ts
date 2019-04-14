import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BaseService } from './service/base.service';
import { CondicaoClimaticaModule } from './condicao-climatica/condicao-climatica.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CondicaoClimaticaModule,
    HttpModule
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
