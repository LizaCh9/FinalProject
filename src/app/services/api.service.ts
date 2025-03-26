import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Mydata} from '../shared/interfaces/mydata';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://dummyjson.com/products/';

  constructor(private http: HttpClient) {}

  getData(): Observable<Mydata[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((res) => res.products),
      delay(2000),
      catchError(this.handleError)
    );
  }
  getProduct(id: number): Observable<Mydata> {
    console.log("Fetching products from API:", this.apiUrl);
    return this.http.get<Mydata>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error(`Error fetching data: ${error.message}`));
  }
}

