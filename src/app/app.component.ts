import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from './service/data-handler.service';
import { Task } from './model/Task';
import {Category} from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo';
  tasks: Task[];
  categories: Category[];

  constructor(
    private dataHandler: DataHandlerService, // фасад для работы с данными
  ) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }


}
