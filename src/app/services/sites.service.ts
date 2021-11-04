import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Site } from '../../shared/site';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  private sitesUrl = '/assets/liste-sites.json';

  constructor(private http: HttpClient) { }

  getSites(): Observable<any> {
    return this.http.get(this.sitesUrl);
  }

  getSite(id: number): Observable<any> {
    return this.getSites()
      .pipe(
        map((sites: Site[]) => sites.find(p => p.id === id))
      );
  }
}
