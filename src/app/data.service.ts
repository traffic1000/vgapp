import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Lesen aus JSON-File
  getConsoles(): Observable<any> {
    return this.http.get("./assets/consoles.json");
  }

}
