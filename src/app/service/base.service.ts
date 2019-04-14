import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers  } from '@angular/http';

@Injectable({providedIn: 'root'})
export class BaseService {
  urlBase = 'https://cors-anywhere.herokuapp.com/http://api.agromonitoring.com/agro/1.0/';
  appid = '267dfb485158462e197fb08db0d79b23';
  headers = new Headers();

  constructor(private http: Http) {}

  getHeader() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: this.headers });
  }

  getUrlWhithAllParam(resource: string, params: Map<String, String>) {
    params.set('appid', this.appid);
    const novoUrlBase = this.urlBase + resource + '?';
    return novoUrlBase.concat(this.montarParametros(params).toString());
  }

  getHttp (url: any, header: any) {
    return this.http.get(url, header);
  }

  postHttp(url: any, body: any, header: any) {
    return this.http.post(url, body, header);
  }

  montarParametros(params: Map<String, String>) {
    const param: URLSearchParams = new URLSearchParams();
    if (param === null) { return param; }
    params.forEach((value: string, key: string) => {
      param.set(key, value);
    });
    return param;
  }
}
