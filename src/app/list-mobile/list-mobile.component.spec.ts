import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMobileComponent } from './list-mobile.component';

describe('ListMobileComponent', () => {
  let component: ListMobileComponent;
  let fixture: ComponentFixture<ListMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
