import { Component, InputSignal, input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-tile',
  standalone: true,
  templateUrl: './video-tile.component.html',
  styleUrl: './video-tile.component.less',
})
export class VideoTileComponent {
  video: InputSignal<{
    url: string;
    title: string;
    description: string;
    thumbnail: string;
    id: string;
  }> = input.required();

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  navigateToPlayer(id: string) {
    this.router.navigate([`player/${id}`]);
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
