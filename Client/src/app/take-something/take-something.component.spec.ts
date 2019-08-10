import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeSomethingComponent } from './take-something.component';

describe('TakeSomethingComponent', () => {
  let component: TakeSomethingComponent;
  let fixture: ComponentFixture<TakeSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
