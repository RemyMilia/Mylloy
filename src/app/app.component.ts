import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isHomepage: Boolean = true;

  private options = this.getOptions();
  showHeader: Boolean = false;

  private getOptions(): any {
    return {
      hover: true,
      inDuration: 2000
    };
  }

  constructor(location: Location) {
    if (location.path() !== '') {
      this.isHomepage = false;
    }
  }

}
