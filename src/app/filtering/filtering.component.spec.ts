import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringComponent } from './filtering.component';

describe('FilteringComponent', () => {
  let component: FilteringComponent;
  let fixture: ComponentFixture<FilteringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteringComponent]
    });
    fixture = TestBed.createComponent(FilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
