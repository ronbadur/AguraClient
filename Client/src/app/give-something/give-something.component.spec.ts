import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveSomethingComponent } from './give-something.component';

describe('GiveSomethingComponent', () => {
  let component: GiveSomethingComponent;
  let fixture: ComponentFixture<GiveSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
