import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from './service/data-handler.service';
import {Task} from './model/Task';
import {Category} from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  title = 'Todo';
  tasks: Task[];
  categories: Category[]; // все категории


  selectedCategory: Category = null;

  // поиск
  searchTaskText = ''; // текущее значение для поиска задач

  // фильтрация
  statusFilter: boolean;


  constructor(
    private dataHandler: DataHandlerService, // фасад для работы с данными
  ) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);

    this.onSelectCategory(null); // показать все задачи

  }


  // изменение категории
  onSelectCategory(category: Category) {

    this.selectedCategory = category;

    this.updateTasks();

  }

  // удаление категории
  onDeleteCategory(category: Category) {
    this.dataHandler.deleteCategory(category.id).subscribe(cat => {
      this.selectedCategory = null; // открываем категорию "Все"
      this.onSelectCategory(this.selectedCategory);
    });
  }

  // обновлении категории
  onUpdateCategory(category: Category) {
    this.dataHandler.updateCategory(category).subscribe(() => {
      this.onSelectCategory(this.selectedCategory);
    });
  }

// обновление задачи
  onUpdateTask(task: Task) {

    this.dataHandler.updateTask(task).subscribe(cat => {
      this.updateTasks();
    });

  }

  // удаление задачи
  onDeleteTask(task: Task) {

    this.dataHandler.deleteTask(task.id).subscribe(cat => {
      this.updateTasks();
    });
  }

  // поиск задач
  onSearchTasks(searchString: string) {
    this.searchTaskText = searchString;
    this.updateTasks();
  }

  // фильтрация задач по статусу (все, решенные, нерешенные)
  onFilterTasksByStatus(status: boolean) {
    this.statusFilter = status;
    this.updateTasks();
  }

  updateTasks() {
    this.dataHandler.searchTasks(
      this.selectedCategory,
      this.searchTaskText,
      this.statusFilter,
      null
    ).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
