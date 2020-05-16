import { Component, OnInit } from '@angular/core';
import { SoccerControllerService } from '../services/soccer-controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public soccerInfos: Array<Object> = [];

  constructor(private service: SoccerControllerService) { }

  ngOnInit(): void {
    // Get all soccer match infos
    this.service.getAllSoccerInfos().subscribe((responseBody: Array<Object>) => {
      this.soccerInfos = responseBody;
    });
  }
}
