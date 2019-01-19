/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdventureJarConfiguration as __Configuration } from '../adventure-jar-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CreateAccountRequest } from '../models/create-account-request';
import { LinkAccountRequest } from '../models/link-account-request';
@Injectable({
  providedIn: 'root',
})
class AccountService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   */
  GetAccountByIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Account/api/account/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  GetAccountById(id: string): __Observable<null> {
    return this.GetAccountByIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param search undefined
   */
  GetAccountsBySearchResponse(search: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Account/api/account/${search}/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param search undefined
   */
  GetAccountsBySearch(search: string): __Observable<null> {
    return this.GetAccountsBySearchResponse(search).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param request undefined
   */
  CreateAccountResponse(request?: CreateAccountRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/api/account`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param request undefined
   */
  CreateAccount(request?: CreateAccountRequest): __Observable<null> {
    return this.CreateAccountResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param request undefined
   */
  LinkAccountResponse(request?: LinkAccountRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/api/account/link`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param request undefined
   */
  LinkAccount(request?: LinkAccountRequest): __Observable<null> {
    return this.LinkAccountResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AccountService {
}

export { AccountService }
