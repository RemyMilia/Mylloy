import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private options = this.getOptions();
  
    private getOptions():any {
      return {
        hover: true, 
        inDuration: 2000
      }
    }
}
