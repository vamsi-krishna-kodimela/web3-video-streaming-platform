import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataAccessorService } from '../../services/data-accessor.service';
import moment from 'moment';

@Component({
  selector: 'app-uploader-screen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './uploader-screen.component.html',
  styleUrl: './uploader-screen.component.less',
})
export class UploaderScreenComponent {
  title: string = '';
  description: string = '';
  filedata: Blob | undefined;
  uploadProgress: any = '';

  constructor(private dataAccessorService: DataAccessorService) {}

  onSubmit($event: SubmitEvent) {
    this.dataAccessorService.getPreSignedUrl().subscribe({
      next: (response: any) => {
        this.uploadVideo(response?.body?.uploads[0]);
      },
      error: (error: any) => {},
    });
  }

  uploadVideo(routeData: any) {
    let requestPayload: any = {
      url: routeData.presigned_url,
      data: this.filedata,
    };

    this.dataAccessorService.uploadFile(requestPayload).subscribe({
      next: () => {
        console.log('success1');
        this.transcodeVideo(routeData);
      },
      error: () => {},
    });
  }

  transcodeVideo(data: any, param: string = '') {
    let requestPayload: any = {
      source_upload_id: data.id,
      playback_policy: 'public',
      metadata: {
        title: this.title?.trim().length > 0 ? this.title : data.id,
        description: this.description?.trim().length
          ? this.description
          : moment().format(),
      },
    };

    this.dataAccessorService.transCodeVideo(requestPayload, param).subscribe({
      next: (response: any) => {
        this.transcodingStatus(response?.body?.videos?.[0]?.id);
      },
      error: (error: any) => {},
    });
  }

  transcodingStatus(queryParam: any) {
    this.dataAccessorService.getTranscodeStatus(queryParam).subscribe({
      next: (response: any) => {
        setTimeout(() => {
          let query: any = response?.body?.videos?.[0]?.id;
          let state: any = response?.body?.videos?.[0]?.state;
          this.uploadProgress = response?.body?.videos?.[0]?.progress;

          if (
            state != 'success' ||
            state != 'partial_success' ||
            this.uploadProgress < 100
          ) {
            this.transcodingStatus(query);
          } else {
            console.log('success2');
          }
        }, 5000);
      },
    });
  }

  onFileChange(event: any) {
    const file = event?.target?.files?.[0];
    this.filedata = new Blob([file], { type: 'application/octet-stream' });
  }
}
