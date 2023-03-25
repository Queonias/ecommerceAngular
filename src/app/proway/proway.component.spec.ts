import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProwayComponent } from './proway.component';

describe('ProwayComponent', () => {
  let component: ProwayComponent;
  let fixture: ComponentFixture<ProwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProwayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
