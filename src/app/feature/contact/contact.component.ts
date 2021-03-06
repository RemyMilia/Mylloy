import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { toast } from 'angular2-materialize';


@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public user: any;
  public name: string;
  public ready: Boolean = false;

  constructor(private http: HttpClient) {
    this.user = {};
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      toast('Please fill out the form properly', 2000);
    } else {
      this.http.post('//formspree.io/mylloyband@gmail.com', contactForm.value).subscribe(data => {
        contactForm.resetForm();
        toast('Message sent!', 2000);
      }, (err: HttpErrorResponse) => {
        console.error('error while sending message', err.statusText);
      });
    }
  }

  ngOnInit() {
    $(window).on('load', () => {
      this.ready = true;
    });
  }

}
