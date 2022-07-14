import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://sheet.best/api/sheets/6d05fc1e-ecea-4541-b96b-fe7cc3c00718";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //C.R.U.D. - CREATE, READ, UPDATE, DELETE

  //Salva usuário no banco (CREATE)
  postUser(user: User):Observable<User> {
  return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  //Retorna a lista de usuarios (READ)
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Edita o usuário (UPDATE)
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  //Exclui o usuário do banco (DELETE)
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  //Traz usuário único
  getUserById(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
