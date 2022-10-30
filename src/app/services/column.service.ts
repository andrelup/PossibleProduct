import { Injectable } from '@angular/core';
import { Column } from '../interfaces/column';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  columnsList: Column[] = [
    { id: 1, name: 'name', show: true },
    { id: 2, name: 'price', show: true },
    { id: 3, name: 'format', show: true },
    { id: 4, name: 'brand', show: true },
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
  setColumns(columns: Column[]) {
    this.columnsList = columns;
  }
}
