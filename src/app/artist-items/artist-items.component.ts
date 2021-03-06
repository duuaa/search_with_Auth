import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  styleUrls: ['./artist-items.component.css']
})
export class ArtistItemsComponent implements OnInit {
  @Input() artist;
  constructor() { }

  ngOnInit(): void {
  }

}
