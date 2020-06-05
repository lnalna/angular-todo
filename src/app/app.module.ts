import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TasksComponent} from './views/tasks/tasks.component';
import {MatSortModule} from '@angular/material/sort';
import {CategoriesComponent} from './views/categories/categories.component';
import {MatTableModule} from '@angular/material/table';
import {AppComponent} from './app.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
