import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterializeModule } from 'angular2-materialize';
import { ContactComponent } from './feature/contact/contact.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { LoaderComponent } from './feature/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
