import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuploadComponent } from './fupload.component';

describe('FuploadComponent', () => {
  let component: FuploadComponent;
  let fixture: ComponentFixture<FuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
