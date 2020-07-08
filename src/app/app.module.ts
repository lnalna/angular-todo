import {StatCardComponent} from './views/stat/stat-card/stat-card.component';
import {EditPriorityDialogComponent} from './dialog/edit-priority-dialog/edit-priority-dialog.component';
import {SettingsDialogComponent} from './dialog/settings-dialog/settings-dialog.component';
import {PrioritiesComponent} from './views/priorities/priorities.component';
import {StatComponent} from './views/stat/stat.component';
import {HeaderComponent} from './views/header/header.component';
import {AboutDialogComponent} from './dialog/about/about-dialog.component';
import {FooterComponent} from './views/footer/footer.component';
import {EditCategoryDialogComponent} from './dialog/edit-category-dialog/edit-category-dialog.component';
import {TaskDatePipe} from './pipe/task-date.pipe';
import {ConfirmDialogComponent} from './dialog/confirm-dialog/confirm-dialog.component';
import {EditTaskDialogComponent} from './dialog/edit-task-dialog/edit-task-dialog.component';
import {TasksComponent} from './views/tasks/tasks.component';
import {CategoriesComponent} from './views/categories/categories.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ColorPickerModule} from 'ngx-color-picker';
import {SidebarModule} from 'ng-sidebar';
import localeRu from '@angular/common/locales/ru';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {HttpClientModule} from '@angular/common/http';
import {TASK_URL_TOKEN} from './data/dao/impl/TaskService';
import {CATEGORY_URL_TOKEN} from './data/dao/impl/CategoryService';
import {PRIORITY_URL_TOKEN} from './data/dao/impl/PriorityService';
import {STAT_URL_TOKEN} from './data/dao/impl/StatService';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TasksComponent,
    EditTaskDialogComponent,
    ConfirmDialogComponent,
    TaskDatePipe,
    EditCategoryDialogComponent,
    FooterComponent,
    AboutDialogComponent,
    HeaderComponent,
    StatComponent,
    StatCardComponent,
    PrioritiesComponent,
    SettingsDialogComponent,
    EditPriorityDialogComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ColorPickerModule,
    SidebarModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: TASK_URL_TOKEN,
      useValue: 'http://localhost:8080/task'
    },

    {
      provide: CATEGORY_URL_TOKEN,
      useValue: 'http://localhost:8080/category'
    },


    {
      provide: PRIORITY_URL_TOKEN,
      useValue: 'http://localhost:8080/priority'
    },


    {
      provide: STAT_URL_TOKEN,
      useValue: 'http://localhost:8080/stat'
    },
  ],
  entryComponents: [
    EditTaskDialogComponent,
    ConfirmDialogComponent,
    EditCategoryDialogComponent,
    AboutDialogComponent,
    SettingsDialogComponent,
    EditPriorityDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
