import {
  Component,
  OnInit
} from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Location, {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public isHomepage: Boolean = true;

  private options = this.getOptions();
  public ready = false;
  showHeader: Boolean = false;

  ngOnInit() {
    $(window).on('load', () => {
      this.ready = true;
    });
  }

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
