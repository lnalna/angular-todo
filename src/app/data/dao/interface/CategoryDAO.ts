import {Category} from '../../../model/Category';
import {CommonDAO} from './CommonDAO';
import {Observable} from 'rxjs';
import {CategorySearchValues} from '../search/SearchObjects';

// специфичные методы для работы с категориями (которые не входят в обычный CRUD)
export interface CategoryDAO extends CommonDAO<Category> {

    // поиск категорий по любым параметрам, указанным в CategorySearchValues
    findCategories(categorySearchValues: CategorySearchValues): Observable<any>;

}
