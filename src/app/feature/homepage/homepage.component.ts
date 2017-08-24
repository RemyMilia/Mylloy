import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

//import "jquery-ui";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public ttt: boolean = false;
  ngOnInit() {
    $(window).on("load", () => {
      this.ttt = true;      
    });
  }

}
