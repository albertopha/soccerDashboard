import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

interface QuickPlayer {
  embed: string,
  title: string
};

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.scss']
})
export class PlayerModalComponent implements OnInit {
  title: string| null = null;
  embed: SafeHtml | null = null;

  constructor(public dialogRef: MatDialogRef<PlayerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuickPlayer,
    private sanitizer: DomSanitizer) {
    this.title = data.title || null;
    if (data.embed) {
      this.embed = this.sanitizer.bypassSecurityTrustHtml(data.embed);
    } else {
      this.embed = null;
    }
  }

  ngOnInit(): void {
    console.log("title = ", this.title);
    console.log("embed = ", this.embed);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
