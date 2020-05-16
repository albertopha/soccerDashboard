import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoccerControllerService {
  private host: string = "http://127.0.0.1:5000/";

  constructor(private httpClient: HttpClient) { }

  getAllSoccerInfos() {
    const apiUrl = this.host + "api/v1/soccerinfos";
    return this.httpClient.get(apiUrl);
  }
}
