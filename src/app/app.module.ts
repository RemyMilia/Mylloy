import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AboutComponent } from './feature/about/about.component';
import { ContactComponent } from './feature/contact/contact.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { LoaderComponent } from './feature/loader/loader.component';
import { MusicDetailsComponent } from './feature/music/music-details/music-details.component';
import { MusicPlayerComponent } from './feature/music/music-player/music-player.component';
import { MusicProgressComponent } from './feature/music/music-progress/music-progress.component';
import { MusicService } from './feature/music/service/music.service';
import { ApiSoundCloudService } from './feature/music/service/soundcloud/api-sound-cloud.service';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { ShowsComponent } from './feature/shows/shows.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    NavbarComponent,
    LoaderComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    ShowsComponent,
    AboutComponent
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
