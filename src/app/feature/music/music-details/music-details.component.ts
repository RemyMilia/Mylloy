import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../../music/service/music.service';

@Component({
  selector: 'app-music-details',
  templateUrl: 'music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {

  public paused: Boolean = false;
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
      this.currentTrack = this.tracks[4];
      this.title = this.currentTrack.title;
      this.musicService.play(this.currentTrack.stream_url);
    });

    this.musicService.audio.onended = () => {
      this.handleNext();
    };
    this.musicService.audio.ontimeupdate = () => this.handleTimeUpdate();
  }

  handleNext() {
    const next = this.musicService.next(this.tracks, this.currentTrack);
    this.musicService.play(next.stream_url);
    this.currentTrack = next;
    this.title = this.currentTrack.title;
    this.paused = false;
  }

  handlePrevious() {
    const previous = this.musicService.previous(this.tracks, this.currentTrack);
    this.musicService.play(previous.stream_url);
    this.currentTrack = previous;
    this.title = this.currentTrack.title;
    this.paused = false;
  }

  handlePausePlay() {
    if (this.musicService.audio.paused) {
      this.musicService.audio.play();
      this.paused = false;
    } else {
      this.musicService.audio.pause();
      this.paused = true;
    }
  }

  handleTimeUpdate() {
    const elapsed = this.musicService.audio.currentTime;
    const duration = this.musicService.audio.duration;
    this.position = elapsed && duration ? elapsed / duration : 0;
    this.elapsed = this.musicService.formatTime(elapsed);
    this.duration = this.musicService.formatTime(duration);
  }
}


