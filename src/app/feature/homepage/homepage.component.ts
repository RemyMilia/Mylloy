import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public ttt: Boolean = false;
  ngOnInit() {
    $(window).on('load', () => {
      this.ttt = true;
    });
  }

}
