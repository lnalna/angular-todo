import {Category} from '../../../model/Category';
import {TestData} from '../../TestData';
import {CategoryDAO} from '../interface/CategoryDAO';
import {Observable, of} from 'rxjs';


export class CategoryDAOArray implements CategoryDAO {


    get(id: number): Observable<Category> {
        return undefined;
    }

    getAll(): Observable<Category[]> {
        return of(TestData.categories);
    }


    add(category: Category): Observable<Category> {
        return undefined;
    }

    delete(id: number): Observable<Category> {
        return undefined;
    }

    update(category: Category): Observable<Category> {
        return undefined;
    }


    search(title: string): Observable<Category[]> {
        return undefined;
    }


}
