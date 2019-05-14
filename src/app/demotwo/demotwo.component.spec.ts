import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotwoComponent } from './demotwo.component';

describe('DemotwoComponent', () => {
  let component: DemotwoComponent;
  let fixture: ComponentFixture<DemotwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
