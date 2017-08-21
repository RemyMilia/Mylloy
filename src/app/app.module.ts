import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterializeModule } from 'angular2-materialize';
import { ContactComponent } from './feature/contact/contact.component';
import { HomepageComponent } from './feature/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
