import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsliderComponent } from './formslider.component';

describe('FormsliderComponent', () => {
  let component: FormsliderComponent;
  let fixture: ComponentFixture<FormsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
