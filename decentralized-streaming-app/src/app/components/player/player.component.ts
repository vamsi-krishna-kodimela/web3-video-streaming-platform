import { DecimalPipe } from '@angular/common';
import { Component, InputSignal, ViewChild, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './player.component.html',
  styleUrl: './player.component.less',
})
export class PlayerComponent {
  videoUrl: InputSignal<string> = input.required<string>();
  isMuted: boolean = false;
  volume: number = 1;
  progress: number = 0;
  isPlaying: boolean = false;
  duration: number = 0;
  currentTime: number = 0;

  @ViewChild('videoPlayer') videoPlayer: any;

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.addEventListener(
      'timeupdate',
      this.updateProgress.bind(this)
    );
    this.videoPlayer.nativeElement.addEventListener(
      'ended',
      this.handleVideoEnd.bind(this)
    );
  }

  setVolume() {
    this.videoPlayer.nativeElement.volume = this.volume;
  }

  setProgress() {
    this.duration = this.videoPlayer.nativeElement.duration;
    this.videoPlayer.nativeElement.currentTime =
      (this.progress / 100) * this.duration;
    this.currentTime = this.videoPlayer.nativeElement.currentTime;
  }

  muteUnmute() {
    this.isMuted = !this.isMuted;
    this.videoPlayer.nativeElement.muted = this.isMuted;
  }

  playPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

  updateProgress() {
    this.currentTime = this.videoPlayer.nativeElement.currentTime;
    this.duration = this.videoPlayer.nativeElement.duration;
    this.progress = (this.currentTime / this.duration) * 100;

    console.log(
      `Current Time: ${this.currentTime} Duration: ${this.duration} Progress: ${this.progress}`
    );
  }

  handleVideoEnd() {
    this.isPlaying = false;
    this.progress = 0;
  }
  openFullScreen() {
    if (this.videoPlayer.nativeElement.requestFullscreen) {
      this.videoPlayer.nativeElement.requestFullscreen();
    } else if (this.videoPlayer.nativeElement.mozRequestFullScreen) {
      this.videoPlayer.nativeElement.mozRequestFullScreen();
    } else if (this.videoPlayer.nativeElement.webkitRequestFullscreen) {
      this.videoPlayer.nativeElement.webkitRequestFullscreen();
    } else if (this.videoPlayer.nativeElement.msRequestFullscreen) {
      this.videoPlayer.nativeElement.msRequestFullscreen();
    }
  }
}
