// класс реализовывает методы, которые нужны frontend'у, т.е. для удобной работы представлений
// напоминает паттер Фасад (Facade) - выдает только то, что нужно для функционала
// сервис не реализовывает напрямую интерфейсы DAO, а использует их реализации (в данном случае массивы)
// может использовать не все методы DAO, а только нужные

import {Injectable} from '@angular/core';
import {PriorityDAOArray} from '../data/dao/impl/PriorityDAOArray';
import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {TaskDAOArray} from '../data/dao/impl/TaskDAOArray';
import {CategoryDAOArray} from '../data/dao/impl/CategoryDAOArray';
import {Observable} from 'rxjs';
import {Task} from '../model/Task';

@Injectable({
    providedIn: 'root'
})
export class DataHandlerService {
  // релизации работы с данными с помощью массива
  // (можно подставлять любые релизации, в том числе с БД. Главное - соблюдать интерфейсы)
  taskDaoArray = new TaskDAOArray();
  categoryDaoArray = new CategoryDAOArray();
  priorityDaoArray = new PriorityDAOArray();

  constructor() {
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDaoArray.getAll();
  }

  getAllPriorities(): Observable<Priority[]> {
    return this.priorityDaoArray.getAll();
  }


  updateTask(task: Task): Observable<Task> {
    return this.taskDaoArray.update(task);
  }


  // поиск задач по параметрам
  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority);
  }

  deleteTask(id: number): Observable<Task> {
    return this.taskDaoArray.delete(id);
  }


  updateCategory(category: Category): Observable<Category> {
    return this.categoryDaoArray.update(category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.categoryDaoArray.delete(id);
  }

  addTask(task: Task): Observable<Task> {
    return this.taskDaoArray.add(task);
  }

  addCategory(title: string): Observable<Category> {
    return this.categoryDaoArray.add(new Category(null, title));
  }


  searchCategories(title: string): Observable<Category[]> {
    return this.categoryDaoArray.search(title);
  }

}
