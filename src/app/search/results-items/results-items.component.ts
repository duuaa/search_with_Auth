import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-items',
  templateUrl: './results-items.component.html',
  styleUrls: ['./results-items.component.css']
})
export class ResultsItemsComponent implements OnInit {
  @Input() artist;
  constructor() { }

  ngOnInit(): void {
  }

}
