import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frequency } from '../interfaces/shared.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private apiURL = '../jsonObj/shared.json/frequencies';

  constructor(private http: HttpClient) { }

  getFrequencies(): Observable<Frequency[]>{
    return this.http.get<Frequency[]>(this.apiURL);
  }
}
