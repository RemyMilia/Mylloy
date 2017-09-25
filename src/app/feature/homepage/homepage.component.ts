import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MusicService } from '../music/service/music.service';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public ready: Boolean = false;

  ngOnInit() {
    $(window).on('load', () => {
      this.ready = true;
    });
  }
}
