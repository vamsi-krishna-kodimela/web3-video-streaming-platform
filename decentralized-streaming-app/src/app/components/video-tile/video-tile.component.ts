import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-video-tile',
  standalone: true,
  imports: [],
  templateUrl: './video-tile.component.html',
  styleUrl: './video-tile.component.less',
})
export class VideoTileComponent {
  video: InputSignal<{
    url: string;
    title: string;
    description: string;
    thumbnail: string;
  }> = input.required();
}
