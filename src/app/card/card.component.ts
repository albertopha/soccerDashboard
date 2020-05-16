import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() info: object;
  @Input() ind: number;

  constructor() { }

  ngOnInit(): void {
    console.log("info === ", this.info, " & index = ", this.ind);
  }

}
