import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="col s5 m5 l5"> </div>
  <div class="col s2 m2 l2 container-progress">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </div>`,
  styles: [`
    .container-progress {
      margin-top: 320px;
    }
  `]
})
export class LoaderComponent {
}
