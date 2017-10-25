import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {

  constructor() { }

  @Input() paused;

  @Output() pauseplay = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();

}
