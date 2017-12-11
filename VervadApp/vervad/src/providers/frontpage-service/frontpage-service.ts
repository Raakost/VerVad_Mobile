import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Frontpage} from "../../models/frontpage";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FrontpageServiceProvider {

  APIUrl: string = 'http://vervadapi.azurewebsites.net/api/FrontPage/';

  constructor(public http: Http) {
  }

  getFrontpage(id: number, language: string): Observable<Frontpage> {
    var frontPage = this.http.get(this.APIUrl + '?id=' + id + '&language=' + language)
      .map(response => response.json() as Frontpage);
    return frontPage;
  }
}

