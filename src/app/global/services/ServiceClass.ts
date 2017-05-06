import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
declare var unescape: any;
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceClass
{
  private http: Http;
  constructor(http: Http)
  {
    this.http = http;
  }
  /**
   * http Get
   * @param path
   * @param param
   */
  get(path: string, param: any): Observable<Response>
  {
    return this.http.get(ServiceConstants.url + path + '?' + param, {
      headers: <Headers>ServiceConstants.getAuthHeader()
    });
  }
  /**
   * http post
   * @param path
   * @param param
   */
  post(path: string, creds: any): Observable<any>
  {
    return this.http.post(ServiceConstants.url + path, creds, {
      headers: <Headers>ServiceConstants.getAuthHeader()

    });
  }

  postXFrom(path: string, creds: any): Observable<any>
  {
    return this.http.post(ServiceConstants.url + path, creds, {
      headers: <Headers>ServiceConstants.getAuthHeader2()

    });
  }
  /**
   * http put
   * @param path
   * @param param
   */
  put(path: string, param: any, creds: any): Observable<Response>
  {
    return this.http.put(ServiceConstants.url + path + param, JSON.stringify(creds), {
      headers: <Headers>ServiceConstants.getAuthHeader()
    });
  }
}


export class ServiceConstants
{
  static url: string = 'http://changeisamazing.com/services/';

  public static getAuthHeader(): Headers
  {
    var authHeader = new Headers({ 'Content-Type': 'application/json' });

    var access_token = localStorage.getItem('cst');
    if (access_token != null) {
      authHeader.append('Authorization', access_token);
    }

    return authHeader;
  }

  public static getAuthHeader2(): Headers
  {
    var authHeader = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    var access_token = localStorage.getItem('cst');
    if (access_token != null) {
      authHeader.append('Authorization', access_token);
    }
    return authHeader;
  }

}