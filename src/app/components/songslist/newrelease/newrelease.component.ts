import { Component, OnInit } from '@angular/core';
import { NewRelease } from '../../../mock-album';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css'],
})
export class NewreleaseComponent implements OnInit {
  constructor() {}
  heroes = NewRelease;
  ngOnInit(): void {
 
  }

}
