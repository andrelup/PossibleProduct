import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ColumnService } from 'src/app/services/column.service';
import { Column } from 'src/app/interfaces/column';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-column',
  templateUrl: './manage-column.component.html',
  styleUrls: ['./manage-column.component.scss']
})
export class ManageColumnComponent implements OnInit {

  columns!: Column[];
  constructor(private columnService: ColumnService, public dialogRef: MatDialogRef<ManageColumnComponent>) { }

  ngOnInit(): void {
    this.columns = this.columnService.getColumns();
  }

  drop(event: CdkDragDrop<Column[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.columns);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(this.columns);
    }
  }
  showColumn(index: number) {
    this.columns[index].show = !this.columns[index].show;
  }
  acept() {
    this.columnService.setColumns(this.columns);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
