import {Component, OnInit} from '@angular/core';
import {Category} from './model/Category';
import {CategorySearchValues} from './data/dao/search/SearchObjects';
import {CategoryService} from './data/dao/impl/CategoryService';
import {IntroService} from './service/intro.service';
import {DeviceDetectorService} from 'ngx-device-detector';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

// компонент-контейнер (Smart, Container), который управляет другими  компонентами (Dumb, Presentational)
export class AppComponent implements OnInit {

  categories: Category[]; // все категории

  // статистика
  uncompletedCountForCategoryAll: number;

  // показать/скрыть статистику
  showStat = true;

  // выбранная категория
  selectedCategory: Category = null; // null - значит будет выбрана категория "Все"


  // параметры бокового меню с категориями
  menuOpened: boolean; // открыть-закрыть
  menuMode: string; // тип выдвижения (поверх, с толканием и пр.)
  menuPosition: string; // сторона
  showBackdrop: boolean; // показывать фоновое затемнение или нет

  // тип устройства
  isMobile: boolean;
  isTablet: boolean;

  // параметры поисков
  categorySearchValues = new CategorySearchValues(); // экземпляр можно создать тут же, т.к. не загружаем из cookies



  constructor(
    private categoryService: CategoryService,
    private introService: IntroService, // вводная справоч. информация с выделением областей
    private deviceService: DeviceDetectorService // для определения типа устройства (моб., десктоп, планшет)
  ) {

    // определяем тип запроса
    this.isMobile = deviceService.isMobile();
    this.isTablet = deviceService.isTablet();

    this.showStat = true ? !this.isMobile : false; // если моб. устройство, то по-умолчанию не показывать статистику

    this.setMenuValues(); // установить настройки меню


  }

  ngOnInit() {
    // this.dataHandler.getAllPriorities().subscribe(priorities => this.priorities = priorities);
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);

    // заполнить меню с категориями
    this.fillAllCategories();

    // по-умолчанию показать все задачи (будет выбрана категория Все)
    this.selectCategory(null);

    // для мобильных и планшетов - не показывать интро
    if (!this.isMobile && !this.isTablet) {
      // пробуем показать приветственные справочные материалы
      this.introService.startIntroJS(true);
    }

  }


  // добавление категории
  addCategory(category: Category) {
    this.categoryService.add(category).subscribe(result => {

      }
    );
  }

  // удаление категории
  deleteCategory(category: Category) {
    this.categoryService.delete(category.id).subscribe(cat => {

    });
  }

  // обновлении категории
  updateCategory(category: Category) {
    this.categoryService.update(category).subscribe(() => {

    });
  }


  // заполняет категории и кол-во невыполненных задач по каждой из них (нужно для отображения категорий)
  fillAllCategories() {

    this.categoryService.findAll().subscribe(result => {
      this.categories = result;
    });


  }

  // поиск категории
  searchCategory(categorySearchValues: CategorySearchValues) {
    this.categoryService.findCategories(categorySearchValues).subscribe(result => {
      this.categories = result;
    });
  }


  // изменение категории
  selectCategory(category: Category): void {


  }


  // если закрыли меню любым способом - ставим значение false
  onClosedMenu() {
    this.menuOpened = false;
  }

  // параметры меню
  setMenuValues() {

    this.menuPosition = 'left'; // меню слева

    // настройки бокового меню для моб. и десктоп вариантов
    if (this.isMobile) {
      this.menuOpened = false; // на моб. версии по-умолчанию меню будет закрыто
      this.menuMode = 'over'; // поверх всего контента
      this.showBackdrop = true; // показывать темный фон или нет (нужно для мобильной версии)
    } else {
      this.menuOpened = true; // НЕ в моб. версии  по-умолчанию меню будет открыто (т.к. хватает места)
      this.menuMode = 'push'; // будет "толкать" основной контент, а не закрывать его
      this.showBackdrop = false; // показывать темный фон или нет
    }


  }

  // показать-скрыть меню
  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }


}
