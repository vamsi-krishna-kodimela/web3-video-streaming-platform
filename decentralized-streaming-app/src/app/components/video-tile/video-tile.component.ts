import { Component, InputSignal, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-tile',
  standalone: true,
  imports: [RouterLink],
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
