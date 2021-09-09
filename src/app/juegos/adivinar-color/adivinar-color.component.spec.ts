import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarColorComponent } from './adivinar-color.component';

describe('AdivinarColorComponent', () => {
  let component: AdivinarColorComponent;
  let fixture: ComponentFixture<AdivinarColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinarColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinarColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
