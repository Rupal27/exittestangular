import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebargraphComponent } from './statebargraph.component';

describe('StatebargraphComponent', () => {
  let component: StatebargraphComponent;
  let fixture: ComponentFixture<StatebargraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatebargraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebargraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
