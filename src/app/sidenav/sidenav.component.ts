import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() position: string;
  public isOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.isOpen = !this.isOpen;
  }
}
