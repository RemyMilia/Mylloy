import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="container-progress preloader-wrapper big active">
    <div class="spinner-layer spinner-grey-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
  </div>`,
  styles: [`
    .container-progress {
      margin-top: 200px;
    }
  `]
})
export class LoaderComponent {
}