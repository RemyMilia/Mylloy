import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="bg">
    <nav class="navbar grey darken-3">
      <div class="navbar-fixed">
        <a materialize="sideNav" href="#" data-activates="mobile-sidenav" class="button-collapse">
          <i class="material-icons">menu</i></a>
        <a href="#!" class="brand-logo mylloy-logo">My lloy</a>
        <ul id="side-out" class="right hide-on-med-and-down">
          <li><a href="/shows">Shows</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="https://www.facebook.com/mylloy/"> <i class="mdi-18px mdi mdi-facebook"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UClW3-gE-I87OUHIGNwAS1hw"><i class="mdi-18px mdi mdi-youtube-play"></i></a></li>
          <li><a href="https://soundcloud.com/my-lloy"><i class="mdi-18px mdi mdi-soundcloud"></i></a></li>
        </ul>
      </div>
    </nav>
  </div>`,
  styles: [`
  .mylloy-logo {
    font-family: LemonMilk;
    font-size: 22px;
    margin-left: 8px;
  }
  .bg {
    background-image: url("https://firebasestorage.googleapis.com/v0/b/mylloy-ac68d.appspot.com/o/banniere1-min%202.jpg?alt=media&token=32c0e2e4-2886-45ce-a0f7-d4bac90dd5fd");
  }
  .navbar {
    opacity: 0.55;
  }
  `]
})
export class NavbarComponent implements OnInit {
  @Input()
  isHomepage: Boolean;

  opacity: Number;

  ngOnInit() {
  }
}
