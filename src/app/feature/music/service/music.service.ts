import { Injectable } from '@angular/core';
import { ApiSoundCloudService } from './soundcloud/api-sound-cloud.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { environment } from '../../../../environments/environment';


@Injectable()
export class MusicService {

  audio: any;

  constructor(
    private apiService: ApiSoundCloudService
  ) {
    this.audio = new Audio();
  }

  load(url) {
    this.audio.src = this.apiService.prepareUrl(url);
    this.audio.load();
  }

  play(url) {
    this.load(url);
    this.audio.play();
  }

  getTracks() {
    return this.apiService.get('https://api.soundcloud.com/playlists/' + environment.soundCloud.tracks, true)
      .map(res => res.json()).map(play => play.tracks);
  }

  randomTrack(tracks, currentTrack) {
    let randomNumber;
    const trackLength = tracks.length;
    do {
      randomNumber = Math.floor((Math.random() * trackLength));
    } while (randomNumber === tracks.indexOf(currentTrack));
    return tracks[randomNumber];
  }

  formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }
}
