import {CommonDAO} from './CommonDAO';
import {Observable} from 'rxjs';
import {Stat} from '../../../model/Stat';

// общая статистика по всем задачам
export interface StatDAO extends CommonDAO<Stat> {
  getOverallStat(): Observable<Stat>;
}
