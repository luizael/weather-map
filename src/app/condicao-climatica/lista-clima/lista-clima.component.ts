import { Component, OnInit } from '@angular/core';
import { CondicaoClimaticaService } from 'src/app/service/condicao.climatica.service';

@Component({
  selector: 'app-lista-clima',
  templateUrl: './lista-clima.component.html',
  styleUrls: ['./lista-clima.component.scss'],
  providers: [ CondicaoClimaticaService ]
})
export class ListaClimaComponent implements OnInit {
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
    this.consultarClima();
  }

  consultarClima() {
    this.condicaoClimaticaService.consultarPolygons()
    .then( responsePolygons => { this.polygonSample = responsePolygons; })
    .then(resultPolygons => {
        this.condicaoClimaticaService.consultarClima(this.polygonSample[0].id)
          .then(resultClima => { this.consultaClima = resultClima; })
          .catch(erroClima => {
             console.log('falha a obter o clima');
          });
    }).catch(errorPolygons => {
        console.log('falha ao obter o polygno');
      });
  }
}
