import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly accessToken = new BehaviorSubject(null);

  public getAccessToken(): string {
    return this.accessToken.getValue();
  }

  setAccessToken(accessToken: string) {
    this.accessToken.next(accessToken);
  }

  initializeAccessToken() {
    const accessToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    if (accessToken) {
      this.accessToken.next(accessToken);
    }
  }

  constructor() {
  }
}
