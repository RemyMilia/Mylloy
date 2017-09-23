import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MusicService } from '../music/service/music.service';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public ready: Boolean = false;
  public paused: Boolean = true;
  public isFirstTrack: Boolean = true;
  public tracks: any[];
  public currentTrack: any;
  public title: String;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {
    $(window).on('load', () => {
      this.ready = true;
    });

    this.musicService.getTracks().subscribe(tracks => {
      this.tracks = tracks;
      this.currentTrack = this.tracks[0];
      this.title = this.currentTrack.title;
    });

    this.musicService.audio.onended = () => this.paused = !this.paused;
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

  handleStop() {
    this.musicService.audio.pause();
    this.musicService.audio.currentTime = 0;
    this.paused = true;
  }

  playFirstTrack(tracks) {
    this.currentTrack = this.tracks[0];
    this.musicService.play(this.currentTrack.stream_url);
    this.isFirstTrack = false;
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

  handleRandom() {
    const randomTrack = this.musicService.randomTrack(this.tracks, this.currentTrack);
    this.musicService.play(randomTrack.stream_url);
    this.currentTrack = randomTrack;
    this.title = this.currentTrack.title;
  }

}
