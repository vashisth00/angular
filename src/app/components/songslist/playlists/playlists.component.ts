import { Component, OnInit } from '@angular/core';
import { Playlists } from '../../../mock-album';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor() { }
 heroes = Playlists;
  ngOnInit(): void {
  }

}
