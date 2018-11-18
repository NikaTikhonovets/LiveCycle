import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFiledComponent } from './name-filed.component';

describe('NameFiledComponent', () => {
  let component: NameFiledComponent;
  let fixture: ComponentFixture<NameFiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameFiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
