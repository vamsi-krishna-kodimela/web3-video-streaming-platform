import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IuploadResponse } from '../interfaces/uploadFile';

@Injectable({
  providedIn: 'root',
})
export class DataAccessorService {
  host: string = 'https://api.thetavideoapi.com/';
  apiKey: string = 'srvacc_htn213yavmps3ie9jt60535qu';
  apiSecret: string = '9be8bz8is4xcy1w6p95a64hmnxswvbz1';

  headers: any = {
    'x-tva-sa-id': this.apiKey,
    'x-tva-sa-secret': this.apiSecret,
  };

  constructor(private http: HttpClient) {}

  getVideos(cursor: number = 1, pageSize: number = 100) {
    let url = `video/${this.apiKey}/list?page=${cursor}&number=${pageSize}`;

    return this.http.get<IuploadResponse>(this.host + url, {
      headers: this.headers,
    });
  }

  searchVideos(id: any) {
    let url = `video/${this.apiKey}/search?key=${id}&page=1&number=1`;

    return this.http.get<IuploadResponse>(this.host + url, {
      headers: this.headers,
    });
  }

  getPreSignedUrl() {
    let url = 'upload';

    return this.http.post<IuploadResponse>(
      this.host + url,
      {},
      { headers: this.headers }
    );
  }

  uploadFile(requestPayload: { url: string; data: any }) {
    let url = requestPayload.url;
    let fileData = requestPayload.data;

    let Uheaders = {
      ...this.headers,
      'Content-Type': 'application/octet-stream',
    };

    return this.http.put(url, fileData, { headers: Uheaders });
  }

  transCodeVideo(requestPayload: any, param: string) {
    let url = 'video' + (param?.trim()?.length > 0 ? '/' + param : '');
    let Uheaders = {
      ...this.headers,
      'Content-Type': 'application/json',
    };

    return this.http.post<IuploadResponse>(this.host + url, requestPayload, {
      headers: this.headers,
    });
  }

  getTranscodeStatus(param: string) {
    let url = 'video/' + param;
    let Uheaders = {
      ...this.headers,
      'Content-Type': 'application/json',
    };

    return this.http.get(this.host + url, {
      headers: this.headers,
    });
  }
}
