import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GitInfoService {
  constructor(private http: HttpClient) {}

  getUserInfo(): any {
    return this.http.get('https://api.github.com/users/serhiirodikov');
  }
  getRepos(): any {
    return this.http.get('https://api.github.com/users/serhiirodikov/repos');
  }
}
