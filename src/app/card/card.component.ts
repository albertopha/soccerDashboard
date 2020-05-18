import { Component, OnInit, Input } from '@angular/core';

interface SoccerInfo {
  _id: Object;
  competition: Object;
  date: String;
  embed: String;
  side1: Object;
  side2: Object;
  thumbnail: String;
  title: String;
  url: String;
  videos: Array<any>;
  last_refreshed: String;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() info: SoccerInfo;
  @Input() ind: Number;

  constructor() { }

  ngOnInit(): void {
    console.log("info === ", this.info, " & index = ", this.ind);
  }

}
