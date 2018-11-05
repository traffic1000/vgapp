import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IGame } from './game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Lesen aus JSON-File
  getConsoles(): Observable<any> {
    return this.http.get("./assets/consoles.json");
  }

  // Games zu Konsole laden (via API)
  getGamesByConsole(consoleId): Observable<IGame[]>{
    return this.http.get<IGame[]>('https://vgdbreadapi20181029030422.azurewebsites.net/api/vgdbread/consoles/'+consoleId);
  }
}
