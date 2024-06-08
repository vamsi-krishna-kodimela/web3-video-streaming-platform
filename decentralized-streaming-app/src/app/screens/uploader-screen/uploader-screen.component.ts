import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  onSubmit($event: SubmitEvent) {
    throw new Error('Method not implemented.');
  }
  onFileChange($event: Event) {
    throw new Error('Method not implemented.');
  }
}
