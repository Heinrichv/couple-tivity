/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { AdventureJarConfiguration as __Configuration } from '../adventure-jar-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityModel } from '../models/activity-model';
@Injectable({
  providedIn: 'root',
})
class ActivityService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  GetAllActivitiesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/activity/all`,
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
  }  GetAllActivities(): __Observable<null> {
    return this.GetAllActivitiesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param request undefined
   */
  UpdateActivityResponse(request?: ActivityModel): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/activity`,
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
  UpdateActivity(request?: ActivityModel): __Observable<null> {
    return this.UpdateActivityResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param request undefined
   */
  AddActivityResponse(request?: ActivityModel): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/activity`,
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
  AddActivity(request?: ActivityModel): __Observable<null> {
    return this.AddActivityResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ActivityService.AddActivityImageParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `Name`:
   *
   * - `Length`:
   *
   * - `Headers`:
   *
   * - `FileName`:
   *
   * - `ContentType`:
   *
   * - `ContentDisposition`:
   */
  AddActivityImageResponse(params: ActivityService.AddActivityImageParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;

   if(params.Name !== null && typeof params.Name !== "undefined") { __formData.append('Name', params.Name as string | Blob);}
   if(params.Length !== null && typeof params.Length !== "undefined") { __formData.append('Length', JSON.stringify(params.Length));}
   if(params.Headers !== null && typeof params.Headers !== "undefined") { __formData.append('Headers', JSON.stringify(params.Headers));}
   if(params.FileName !== null && typeof params.FileName !== "undefined") { __formData.append('FileName', params.FileName as string | Blob);}
   if(params.ContentType !== null && typeof params.ContentType !== "undefined") { __formData.append('ContentType', params.ContentType as string | Blob);}
   if(params.ContentDisposition !== null && typeof params.ContentDisposition !== "undefined") { __formData.append('ContentDisposition', params.ContentDisposition as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/activity/image/${params.id}`,
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
   * @param params The `ActivityService.AddActivityImageParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `Name`:
   *
   * - `Length`:
   *
   * - `Headers`:
   *
   * - `FileName`:
   *
   * - `ContentType`:
   *
   * - `ContentDisposition`:
   */
  AddActivityImage(params: ActivityService.AddActivityImageParams): __Observable<null> {
    return this.AddActivityImageResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
  GetRandomActivityResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/activity/random`,
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
  }  GetRandomActivity(): __Observable<null> {
    return this.GetRandomActivityResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ActivityService {

  /**
   * Parameters for AddActivityImage
   */
  export interface AddActivityImageParams {
    id: string;
    Name?: string;
    Length?: number;
    Headers?: {};
    FileName?: string;
    ContentType?: string;
    ContentDisposition?: string;
  }
}

export { ActivityService }
