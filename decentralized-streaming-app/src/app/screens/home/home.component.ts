import { Component } from '@angular/core';
import { VideoTileComponent } from '../../components/video-tile/video-tile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoTileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  videos: {
    url: string;
    title: string;
    thumbnail: string;
    description: string;
  }[] = [
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
    {
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      title: 'Gangnam Style',
      thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
      description: 'The music video for "Gangnam Style" by Psy.',
    },
  ];
}
