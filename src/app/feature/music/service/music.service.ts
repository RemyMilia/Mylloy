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

  next(tracks, currentTrack) {
    if (tracks.indexOf(currentTrack) === tracks.length - 1) {
      return tracks[0];
    }
    return tracks[tracks.indexOf(currentTrack) + 1];
  }

  previous(tracks, currentTrack) {
    if (tracks.indexOf(currentTrack) === 0) {
      return tracks[tracks.length - 1];
    }
    return tracks[tracks.indexOf(currentTrack) - 1];
  }

  formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }
}
