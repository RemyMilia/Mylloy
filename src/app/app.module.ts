import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterializeModule } from 'angular2-materialize';
import { ContactComponent } from './feature/contact/contact.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { LoaderComponent } from './feature/loader/loader.component';

import { MusicService } from './feature/music/service/music.service';
import { ApiSoundCloudService } from './feature/music/service/soundcloud/api-sound-cloud.service';
import { MusicDetailsComponent } from './feature/music/music-details/music-details.component';
import { MusicPlayerComponent } from './feature/music/music-player/music-player.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    NavbarComponent,
    LoaderComponent,
    MusicDetailsComponent,
    MusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MusicService,
    ApiSoundCloudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
