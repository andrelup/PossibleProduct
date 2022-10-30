import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { AppModule } from '../../app.module';
import { ManageColumnComponent } from './manage-column.component';

describe('ManageColumnComponent', () => {
  let component: ManageColumnComponent;
  let fixture: ComponentFixture<ManageColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageColumnComponent],
      providers: [ProductService],
      imports: [MatDialogModule, DragDropModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ManageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
