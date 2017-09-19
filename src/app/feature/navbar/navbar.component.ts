import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="grey" [style.opacity]="opacity" [ngClass]="{'darken-3': '!isHomepage'}">
    <div class="navbar-fixed">
      <a materialize="sideNav" href="#" data-activates="mobile-sidenav" class="button-collapse">
        <i class="material-icons">menu</i></a>
      <a href="#!" class="brand-logo mylloy-logo">My lloy</a>
      <ul id="side-out" class="right hide-on-med-and-down">
        <li><a href="/contact">Contact</a></li>
        <li><a href="https://www.facebook.com/mylloy/"> <i class="mdi-18px mdi mdi-facebook"></i></a></li>
        <li><a href="https://www.youtube.com/channel/UClW3-gE-I87OUHIGNwAS1hw"><i class="mdi-18px mdi mdi-youtube-play"></i></a></li>
        <li><a href="#!"><i class="mdi-18px mdi mdi-soundcloud"></i></a></li>
      </ul>
    </div>
  </nav>`,
  styles: [`
  .mylloy-logo {
    font-family:LemonMilk;
    font-size:22px;
    margin-left: 5px;
  }
  `]
})
export class NavbarComponent implements OnInit {
  @Input()
  isHomepage: Boolean;

  opacity: Number;

  ngOnInit() {
    this.isHomepage ? this.opacity = 0.6 : this.opacity = 1;
  }
}
