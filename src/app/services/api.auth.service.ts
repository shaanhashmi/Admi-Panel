import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ApiAuthService {
    constructor(
        private http: HttpClient
    ) { }

    authPost(url, body): Observable<any> {
        return this.http.post(`${environment.baseUrl}/${url}`, body)
            .pipe(
                map(res => {
                    return res;
                }),
                catchError(err => {
                    return throwError(err || 'Server error');
                })
            );
    }
    authGet(url, query?: string): Observable<any> {
        return this.http.get(`${environment.baseUrl}/${url}`)
            .pipe(
                map(res => {
                    return res;
                }),
                catchError(err => {
                    return throwError(err || 'Server error');
                })
            );
    }
    authUpdate(url, body): Observable<any> {
        return this.http.put(`${environment.baseUrl}/${url}`, body)
            .pipe(
                map(res => {
                    return res;
                }),
                catchError(err => {
                    return throwError(err || 'Server error');
                })
            );
    }
}
