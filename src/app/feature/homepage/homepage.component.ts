import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MusicService } from '../music/service/music.service';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public ready: Boolean = false;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {
    $(window).on('load', () => {
      this.ready = true;
    });

    this.musicService.getTracks().subscribe(tracks => {
      // console.log('tracks', tracks);
      // this.musicService.play(tracks.stream_url);
    });
    // console.log('get track', this.musicService.getTracks());
  }

}
