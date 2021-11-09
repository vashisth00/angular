import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../../mock-album';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css'],
})
export class NewreleaseComponent implements OnInit {
  constructor() {}
  heroes = HEROES;
  ngOnInit(): void {
    const songsList = [
      {
        image:
          'https://ik.imagekit.io/hk/image_2_zne6EsUHzUy.png?updatedAt=1636489817123',
        title: 'Here',
      },
      {
        image:
          'https://ik.imagekit.io/hk/image_2_zne6EsUHzUy.png?updatedAt=1636489817123',
        title: 'dd',
      },
       {
        image:
          'https://ik.imagekit.io/hk/image_2_zne6EsUHzUy.png?updatedAt=1636489817123',
        title: 'dd',
      },
    ];
    const sweeterArray = songsList.map((sweetItem) => {
      const ab = sweetItem.title;
      return ab;
    });

    console.log(sweeterArray);
 
  }


}
