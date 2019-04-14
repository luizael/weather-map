import { Component, OnInit } from '@angular/core';
import { CondicaoClimaticaService } from 'src/app/service/condicao.climatica.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [ CondicaoClimaticaService ]
})
export class FormularioComponent implements OnInit {
  nomeCidade = '';
  resultado: any;

  polygonSample = [{
    'id': '',
    'name': '',
    'user_id': '',
    'area': '',
    'center': [],
    'geo_json': {
        'geometry': {
          'coordinates': []
        }
      }
  }];
  consultaClima: {
    'dt': '',
    'weather': [
        {
            'id': '',
            'main': '',
            'description': '',
            'icon': ''
        }
    ],
    'main': {
        'temp': '',
        'pressure': '',
        'humidity': '',
        'temp_min': '',
        'temp_max': ''
    },
    'wind': {
        'speed': '',
        'deg': ''
    },
    'clouds': {
        'all': ''
    }
  };

  constructor(private condicaoClimaticaService: CondicaoClimaticaService) { }
  ngOnInit() {
    this.condicaoClimaticaService.mapearCidade();
  }

  consultarCidade() {
    this.resultado = this.condicaoClimaticaService.consultarCidade( this.nomeCidade )
    .then( responsePolygons => {
      this.polygonSample = responsePolygons;
      this.condicaoClimaticaService.consultarClima(this.polygonSample[0].id)
          .then(resultClima => { this.consultaClima = resultClima; })
          .catch(erroClima => {
             console.log('falha a obter o clima');
          });
    });
  }
}
