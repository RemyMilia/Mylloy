import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  public shows: [Show];
  public ready: boolean;

  constructor() {
    this.shows =
      [
        {
          date: 'Jan 2018',
          place: 'L\'Etage',
          city: 'Paris'
        },
        {
          date: 'Sep 2017',
          place: 'Parc Floral',
          city: 'Paris'
        },
        {
          date: 'Jun 2017',
          place: 'Point Ephemere',
          city: 'Paris'
        },
        {
          date: 'Apr 2017',
          place: 'The Hood',
          city: 'Paris'
        }
      ];
  }

  ngOnInit() {
    $(window).on('load', () => {
      this.ready = true;
    });
  }

}

export interface Show {
  date: any;
  place: string;
  city: string;
}



