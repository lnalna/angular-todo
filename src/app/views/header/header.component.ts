import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {IntroService} from '../../service/intro.service';
import {SettingsDialogComponent} from '../../dialog/settings-dialog/settings-dialog.component';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

    @Input()
    categoryName: string;

    @Input()
    showStat: boolean;

    @Output()
    toggleStat = new EventEmitter<boolean>(); // показать/скрыть статистику

    @Output()
    toggleMenu = new EventEmitter(); // показать/скрыть статистику

    constructor(
        private dialog: MatDialog,
        private introService: IntroService
    ) {
    }

    ngOnInit() {
    }

    onToggleStat(): void {
        this.toggleStat.emit(!this.showStat); // вкл/выкл статистику
    }

    // окно настроек
    showSettings(): void {
        const dialogRef = this.dialog.open(SettingsDialogComponent,
            {
                autoFocus: false,
                width: '500px'
            });

        // никаких действий не требуется после закрытия окна

    }

    showIntroHelp() {
        this.introService.startIntroJS(false);
    }

    onToggleMenu() {
        this.toggleMenu.emit(); // показать/скрыть меню
    }


}
