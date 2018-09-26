import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiUrl } from "./api.url.service";

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService {
    jobData: any
    data: any;
    constructor(
        private http: HttpClient
    ) { }

    authPost(url, body): Observable<any> {
        return this.http.post(`${environment.baseUrl}/${url}`, body)
            .pipe(
                catchError(err => {
                    return throwError(err || 'Server error');
                })
            );
    }
    authGet(url, query?: string): Observable<any> {
        return this.http.get(`${environment.baseUrl}/${url}`)
            .pipe(
                catchError(err => {
                    return throwError(err || 'Server error');
                })
            );
    }
    authUpdate(url, body): Observable<any> {
        return this.http.put(`${environment.baseUrl}/${url}`, body)
            .pipe(
                catchError(err => {
                    return throwError(err || 'Server error');
                })
            );
    }

    authDelete(url, id): Observable<any> {
        return this.http.delete(`${environment.baseUrl}/${url}/${id}`)
            .pipe(
                catchError(err => {
                    return throwError(err || 'Server error');
                })
            );
    }

    transformToLowerCase(fieldArr, dataArr) {
        dataArr.forEach((element, idx) => {
            for (const key in element) {
                if (fieldArr.includes(key)) {
                    element[key] = element[key].trim().toLowerCase();
                }
            }
        });
        return dataArr
    }

    setData(data) {
        this.data = data
    };

    getDataById(id): Observable<any> {
        if (this.data)
            return new Observable(observer => {
                observer.next(this.data)
            })
        return this.http.get(`${environment.baseUrl}/${id}`)
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
