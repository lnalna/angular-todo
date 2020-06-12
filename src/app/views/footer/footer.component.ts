import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AboutDialogComponent} from '../../dialog/about/about-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: Date;
  site = 'https://www.google.ru';
  blog = 'https://www.google.ru';
  siteName = 'TODO Angular Application';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.year = new Date(); // текуший год
  }

  // окно "О программе"
  openAboutDialog() {
    this.dialog.open(AboutDialogComponent,
      {
        autoFocus: false,
        data: {
          dialogTitle: 'О программе',
          message: 'Тестовое приложение "Angular"'
        },
        width: '400px'
      });

  }

}
