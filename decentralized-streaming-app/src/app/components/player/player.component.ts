import { DecimalPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataAccessorService } from '../../services/data-accessor.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [FormsModule, DecimalPipe, NgClass],
  templateUrl: './player.component.html',
  styleUrl: './player.component.less',
})
export class PlayerComponent implements OnInit {
  onload() {
    setTimeout(() => {
      this.isLoadingCompleted = true;
    }, 1000);
  }
  isLoadingCompleted: boolean = false;

  videoSrc: any = '';

  constructor(
    private router: ActivatedRoute,
    private dataAccessorService: DataAccessorService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getVideoDetails();
  }

  getVideoDetails() {
    let id = this.router.snapshot.paramMap.get('id');

    this.dataAccessorService.getVideos().subscribe({
      next: (response: any) => {
        let video = response?.body?.videos.find((ele: any) => ele.id === id);
        this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
          response?.body?.videos?.[0]?.player_uri
        );
      },
    });
  }
}
