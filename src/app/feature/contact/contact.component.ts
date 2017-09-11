import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { toast } from 'angular2-materialize';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  onSubmit(f: NgForm) {
    if (f.invalid) {
      toast('Please fill the form properly', 2000);
    } else {
      this.http.post('//formspree.io/milia.remy@gmail.com', f.value).subscribe(data => {
        f.resetForm();
        window.location.reload();
      }, (err: HttpErrorResponse) => {
        if (err.error.error === '_replyto or email field has not been sent correctly') {
          toast('Please enter a correct email address', 2000);
        }
        console.log('error while sending message', err.statusText);
      });
    }
  }

  ngOnInit() { }

}
