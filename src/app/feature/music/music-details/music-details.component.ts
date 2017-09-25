import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../../music/service/music.service';

@Component({
  selector: 'app-music-details',
  templateUrl: 'music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {

  public paused: Boolean = true;
  public isFirstTrack: Boolean = true;
  public tracks: any[];
  public currentTrack: any;
  public title: String;

  public elapsed;
  public duration;
  public position;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {

    this.musicService.getTracks().subscribe(tracks => {
      this.tracks = tracks;
      this.currentTrack = this.tracks[0];
      this.title = this.currentTrack.title;
    });

    this.musicService.audio.onended = () => this.paused = !this.paused;
    this.musicService.audio.ontimeupdate = () => this.handleTimeUpdate();
  }

  handleBackward() {
    const elapsed = this.musicService.audio.currentTime;
    console.log(elapsed);
    if (elapsed >= 5) {
      this.musicService.audio.currentTime = elapsed - 5;
    }
  }

  handleForward() {
    const elapsed = this.musicService.audio.currentTime;
    const duration = this.musicService.audio.duration;
    if (duration - elapsed >= 5) {
      this.musicService.audio.currentTime = elapsed + 5;
    }
  }

  handlePausePlay() {
    if (this.musicService.audio.paused) {
      this.isFirstTrack ? this.playFirstTrack(this.tracks) : this.musicService.audio.play();
      this.paused = false;
    } else {
      this.musicService.audio.pause();
      this.paused = true;
    }
  }

  handleRandom() {
    const randomTrack = this.musicService.randomTrack(this.tracks, this.currentTrack);
    this.musicService.play(randomTrack.stream_url);
    this.currentTrack = randomTrack;
    this.title = this.currentTrack.title;
    this.paused = false;
  }

  handleStop() {
    this.musicService.audio.pause();
    this.musicService.audio.currentTime = 0;
    this.paused = true;
  }

  handleTimeUpdate() {
    const elapsed = this.musicService.audio.currentTime;
    const duration = this.musicService.audio.duration;
    this.position = elapsed / duration;
    this.elapsed = this.musicService.formatTime(elapsed);
    this.duration = this.musicService.formatTime(duration);
  }

  playFirstTrack(tracks) {
    this.currentTrack = this.tracks[0];
    this.musicService.play(this.currentTrack.stream_url);
    this.isFirstTrack = false;
  }

}


