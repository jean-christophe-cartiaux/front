import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PimentData } from '../src/app/fakeData/pimentData';
@Injectable({
  providedIn: 'root',
})
export class ChiliService {
  url: string = 'http://localhost:3000/piment';

  constructor(private _client: HttpClient) {}

  get() {
    return this._client.get<any>(this.url);
  }

  addPiment(form: any): Observable<PimentData> {
    return this._client.post<PimentData>(this.url, form);
  }
  getById(id: number) {
    return this._client.get<any>(this.url + '/' + id);
  }
}
