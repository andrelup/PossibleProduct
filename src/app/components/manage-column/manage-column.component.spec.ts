import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageColumnComponent } from './manage-column.component';

describe('ManageColumnComponent', () => {
  let component: ManageColumnComponent;
  let fixture: ComponentFixture<ManageColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageColumnComponent ]
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
