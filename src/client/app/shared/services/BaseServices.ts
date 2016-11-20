﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
declare var unescape: any;
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BaseService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    /**
     * http Get
     * @param path
     * @param param
     */
    get(path: string, param: any): Observable<Response> {
        return this.http.get(ServiceConstants.url + path + '?' + param, {
        });
    }
    /**
     * http post
     * @param path
     * @param param
     */
    post(path: string, creds: any): Observable<any> {
        return this.http.post(ServiceConstants.url + path, creds, {
            headers : <Headers>ServiceConstants.getAuthHeader()

        });
    }
    /**
     * http put
     * @param path
     * @param param
     */
    put(path: string, param: any, creds: any): Observable<Response> {
        return this.http.put(ServiceConstants.url + path + param, JSON.stringify(creds), {
        });
    }
}


export class ServiceConstants {
    static url: string = 'http://www.slutlist.de/beforeafter/';

    public static getAuthHeader(): Headers {
        var authHeader = new Headers({ 'Content-Type': 'application/json' });
        
        return authHeader;
    }

}