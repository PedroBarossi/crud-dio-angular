import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://sheet.best/api/sheets/6d05fc1e-ecea-4541-b96b-fe7cc3c00718";

  constructor(private httpClient: HttpClient) { }

  //C.R.U.D. - CREATE, READ, UPDATE, DELETE

  //Retorna a lista de usuarios (READ)
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
