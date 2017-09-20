import { TestBed, inject } from '@angular/core/testing';

import { ApiSoundCloudService } from './api-sound-cloud.service';

describe('ApiSoundCloudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSoundCloudService]
    });
  });

  it('should be created', inject([ApiSoundCloudService], (service: ApiSoundCloudService) => {
    expect(service).toBeTruthy();
  }));
});
