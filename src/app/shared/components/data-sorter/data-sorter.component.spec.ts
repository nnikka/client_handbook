import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSorterComponent } from './data-sorter.component';

describe('DataSorterComponent', () => {
  let component: DataSorterComponent;
  let fixture: ComponentFixture<DataSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
