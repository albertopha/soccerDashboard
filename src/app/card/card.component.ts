import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerModalComponent } from '../player-modal/player-modal.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log("info === ", this.info, " & index = ", this.ind);
  }

  onPlay(): void {
    const videos = Array.isArray(this.info.videos) && this.info.videos || [];
    const video = videos.length > 0 && videos[0] || null;
    this.dialog.open(PlayerModalComponent, { data: video });
  }

}
