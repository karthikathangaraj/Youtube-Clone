import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoinpageComponent } from './loinpage.component';

describe('LoinpageComponent', () => {
  let component: LoinpageComponent;
  let fixture: ComponentFixture<LoinpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoinpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
