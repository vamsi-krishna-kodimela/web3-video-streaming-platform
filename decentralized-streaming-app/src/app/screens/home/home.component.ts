import { Component, OnInit } from '@angular/core';
import { VideoTileComponent } from '../../components/video-tile/video-tile.component';
import { DataAccessorService } from '../../services/data-accessor.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoTileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  videos: {
    url: string;
    title: string;
    thumbnail: string;
    description: string;
    id: string;
  }[] = [];

  constructor(private dataAccessorService: DataAccessorService) {}

  ngOnInit(): void {
    this.getVideoListing();
  }

  getVideoListing() {
    this.dataAccessorService.getVideos().subscribe({
      next: (response: any) => {
        response?.body?.videos?.map((ele: any) => {
          let dummy = {
            url: ele.player_uri,
            id: ele.id,
            title: ele.metadata.title,
            thumbnail: ele.player_uri,
            description: ele.metadata.description,
          };

          this.videos.push(dummy);
        });
      },
    });
  }
}
