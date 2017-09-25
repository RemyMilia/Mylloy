import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class ApiSoundCloudService {
  clientId: String = environment.soundCloud.clientId;
  constructor(private http: Http) {}

  get(url, attachClientId?) {
    // Should attach client id if the attachToken
    // is true
    let u;
    attachClientId ? u = this.prepareUrl(url) : u = url;
    // Returns an observable
    // for the HTTP get request
    return this.http.get(u);
  }

  prepareUrl(url) {
    // Attach client id to stream url
    return `${url}?client_id=${this.clientId}`;
  }
}
