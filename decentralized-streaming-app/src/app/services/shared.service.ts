import { Injectable } from '@angular/core';
import { IuploadResponse } from '../interfaces/uploadFile';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  videoTileData: [] | IuploadResponse[] = [];
}
