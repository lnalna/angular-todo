import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/User';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: any;


  // ссылки на компоненты таблицы (должны присваиваться после обновления данных в таблице)
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  dataSource: MatTableDataSource<User>; // контейнер - источник данных для таблицы

  @Input('user')
  private set setUser(user: User) {
    this.user = user;
    this.fillTable();
  }

  //показывает данные пользователя
  fillTable(): void {

    if (!this.dataSource) {
      return;
    }
    this.dataSource.data = this.user;//обновить источник данных, т.к данные User обновились

  }

}
