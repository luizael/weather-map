import { Injectable } from '@angular/core';

import { BaseService } from './base.service';

@Injectable()
export class CondicaoClimaticaService {
    mapaCidades: Map<any, String>;
    cidadeSelecionada = {};
    cosmopolis: any;
    arturnogueira: any;
    limeira: any;

    constructor(private basseHttp: BaseService) {}

    consultarPolygons(): Promise < any[] > {
        const param = new Map();
        param.set('overzoom', 'true');
        param.set('op', 'ndi');
        param.set('from', 'aqua');
        param.set('select', 'b5,b4Sample');
        return this.basseHttp.getHttp(this.basseHttp.getUrlWhithAllParam('polygons', param), this.basseHttp.getHeader())
                    .toPromise()
                    .then( response => response.json());
    }

    consultarClima(poliId: string): Promise <any> {
        const param = new Map();
        param.set('polyid', poliId);
        return this.basseHttp.getHttp(this.basseHttp.getUrlWhithAllParam('weather', param), this.basseHttp.getHeader())
                  .toPromise()
                  .then( result => result.json());
    }

    consultarCidade(cidade: String): Promise <any> {
      Array.from(this.mapaCidades.entries()).forEach(entry => {
        if (cidade === entry[0].cidade) {
              const param = new Map();
              param.set('geo_json', entry[0].geo_json);
              return this.basseHttp.postHttp(this.basseHttp.getUrlWhithAllParam('polygons', param),
                            JSON.stringify( entry[1] ), this.basseHttp.getHeader())
                            .toPromise()
                            .then(response => response.json());
        }
      });
      return;
    }

    mapearCidade() {
      this.cosmopolis = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [-47.206192, -22.633025],
                  [-47.176666, -22.576608],
                  [-47.1492, -22.616863],
                  [-47.183533, -22.653304],
                  [-47.206535, -22.647284],
                  [-47.206192, -22.633025]
                ]
              ]
            }
          }
        ]
      };
      this.arturnogueira = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [-47.206192, -22.633025],
                  [-47.176666, -22.576608],
                  [-47.1492, -22.616863],
                  [-47.183533, -22.653304],
                  [-47.206535, -22.647284],
                  [-47.206192, -22.633025]
                ]
              ]
            }
          }
        ]
      };
      this.mapaCidades = new Map<any, String>();
      this.mapaCidades.set({ 'cidade': 'Cosmópolis', 'geo_json': '1111'}, this.cosmopolis);
      this.mapaCidades.set({'cidade': 'Artur Nogueira', 'geo_json': '2222'}, this.arturnogueira);
      this.mapaCidades.set({'cidade': 'Limieira', 'geo_json': '333'}, this.limeira);
    }
}
