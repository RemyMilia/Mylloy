import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-details',
  template: `<div class="details">
  <h5>{{title}}</h5>
  </div>`,
  styles: [`.details h5 {
    text-align: center;
    padding: 50px 10px;
    margin: 0;
    color: white;
  }`]
})
export class MusicDetailsComponent {

  @Input() title: string;

  constructor() { }
}


