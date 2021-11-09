import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/header/topbar/topbar.component';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SongslistComponent } from './components/songslist/songslist.component';
import { NewreleaseComponent } from './components/songslist/newrelease/newrelease.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SectionComponent } from './components/songslist/newrelease/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    SidebarComponent,
    SongslistComponent,
    NewreleaseComponent,
    SongCardComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
