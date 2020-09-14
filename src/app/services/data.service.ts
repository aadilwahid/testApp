import { BadInput } from './../common/bad-input';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from './../common/app-errors';
import { NotFoundError } from './../common/not-found-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private url, private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.url).pipe(catchError(this.handleError));
  }

  create(resourse) {
    return this.httpClient
      .post(this.url, JSON.stringify(resourse))
      .pipe(catchError(this.handleError));
  }

  update(resourse) {
    // to update only part of the object we use patch
    return this.httpClient
      .patch(this.url + '/' + resourse.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));

    // return this.httpClient.put(this.url, JSON.stringify(post)); // to update the whole object
  }

  delete(id) {
    return this.httpClient
      .get(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error.message));
    }

    if (error.status === 400) { return throwError(new BadInput(error.message)); }

    return throwError(new AppError(error.message));
  }
}
