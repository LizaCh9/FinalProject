import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  isLoggedIn$ = this.loggedIn.asObservable(); // ✅ Public observable

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    const { email, password } = credentials;

    if (email === 'liza@gmail.com' && password === '123456') {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('userEmail', email);
      this.loggedIn.next(true); // ✅ Notify login
      return of({ token: 'mock-token' }).pipe(delay(500));
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    this.loggedIn.next(false); // ✅ Notify logout
  }

  isAdminUser(): boolean {
    const email = localStorage.getItem('userEmail');
    return email === 'liza@gmail.com';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
