import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {

  constructor() { }

  @Input() paused;
  // Controls
  @Output() pauseplay = new EventEmitter();
  @Output() backward = new EventEmitter();
  @Output() forward = new EventEmitter();
  @Output() random = new EventEmitter();
  @Output() stop = new EventEmitter();
}
