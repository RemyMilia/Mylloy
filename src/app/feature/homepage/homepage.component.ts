import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public ready: Boolean = false;
  ngOnInit() {
    $(window).on('load', () => {
      this.ready = true;
    });
  }

}
