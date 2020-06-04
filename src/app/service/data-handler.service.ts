import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TaskDAOArray} from '../data/dao/impl/TaskDAOArray';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  // релизации работы с данными с помощью массива
  // (можно подставлять любые релизации, в том числе с БД. Главное - соблюдать интерфейсы)
  private taskDaoArray = new TaskDAOArray();


  constructor() {
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }


}
