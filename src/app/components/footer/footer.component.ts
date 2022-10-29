import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from 'src/app/components/new-product/new-product.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModal() {
    const dialogRef = this.matDialog.open(NewProductComponent, {
      width: '600px',
      height: '400px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        console.log('Modal clsoed');
      }
    });
  }
}
