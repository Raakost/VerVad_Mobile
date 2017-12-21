import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Frontpage} from "../../models/frontpage";
import {Observable} from "rxjs/Observable";
import {GlobalGoal} from "../../models/globalGoal";
import {ChildrensText} from "../../models/childrensText";
import {LandArt} from "../../models/landArt";
import {ChildrensArtwork} from "../../models/childrensArtwork";
import {AudioVideo} from "../../models/audioVideo";

@Injectable()
export class VerVadServiceProvider {

  APIUrl: string = 'http://vervadapi.azurewebsites.net/api/';
  //APIUrl : string = 'http://localhost:59535/api/';

  constructor(public http: Http) {
  }

  //---Frontpage---
  getFrontpage(id: number, language: string): Observable<Frontpage> {
    return this.http.get(this.APIUrl +  'frontpage?id=' + id + '&language=' + language)
      .map(response => response.json() as Frontpage);
  }

  //---Global goal---
  getGlobalGoal(id: number, language: string): Observable<GlobalGoal>{
    return this.http.get(this.APIUrl + 'globalGoal?id=' + id + '&language=' + language)
      .map(response => response.json() as GlobalGoal);
  }

  getGlobalGoalList(language: string): Observable<GlobalGoal[]>{
    return this.http.get(this.APIUrl + 'globalGoal?language=' + language)
      .map(response => response.json() as GlobalGoal[]);
  }

  //---ChildrensText---
  getChildrensText(id: number, language: string): Observable<ChildrensText>{
    return this.http.get(this.APIUrl + 'ChildrensText?id=' + id + '&language=' + language)
      .map(response => response.json() as ChildrensText);
  }

  getChildrensTextList(language:string): Observable<ChildrensText[]>{
    return this.http.get(this.APIUrl + 'ChildrensText?language=' + language)
      .map(response => response.json() as ChildrensText[]);
  }

  //---Landart---
  getLandArt(id: number, language: string): Observable<LandArt> {
    return this.http.get(this.APIUrl + 'LandArt?id=' + id + '&language=' + language)
      .map(response => response.json() as LandArt);
  }

  getLandArtList(language:string): Observable<LandArt[]>{
    return this.http.get(this.APIUrl + 'LandArt?language=' + language)
      .map(response => response.json() as LandArt[]);
  }

  //---ChildrensArtworks---
  getArtwork(id: number, language: string): Observable<ChildrensArtwork> {
    return this.http.get(this.APIUrl + 'Artwork?id=' + id + '&language=' + language)
      .map(response => response.json() as ChildrensArtwork);
  }

  getArtworkList(language:string): Observable<ChildrensArtwork[]>{
    return this.http.get(this.APIUrl + 'Artwork?language=' + language)
      .map(response => response.json() as ChildrensArtwork[]);
  }

  //---AudioVideo---
  getAudioVideo(id: number, language: string): Observable<AudioVideo> {
    return this.http.get(this.APIUrl + 'AudioVideo?id=' + id + '&language=' + language)
      .map(response => response.json() as AudioVideo);
  }
}

