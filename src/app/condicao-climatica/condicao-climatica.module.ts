import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { CondicaoClimaticaService } from '../service/condicao.climatica.service';
import { ListaClimaComponent } from './lista-clima/lista-clima.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [FormularioComponent, ListaClimaComponent],
  exports: [FormularioComponent, ListaClimaComponent],
  providers: [CondicaoClimaticaService]
})
export class CondicaoClimaticaModule { }
