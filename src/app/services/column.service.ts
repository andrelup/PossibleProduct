import { Injectable } from '@angular/core';
import { Column } from '../interfaces/column';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  columnsList: Column[] = [
    { name: 'name', show: true },
    { name: 'price', show: true },
    { name: 'format', show: true },
    { name: 'brand', show: true },
  ];
  constructor() { }
  getColumns() {
    return this.columnsList.slice();
  }
  getOnlyShowsColumns() {
    return this.columnsList.filter(item => item.show).map(item => item.name);
  }
  setShowFieldByIndex(index: number, show: boolean) {
    this.columnsList[index].show = show;
  }
}
