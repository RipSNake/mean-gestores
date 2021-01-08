import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentismoComponent } from './presentismo.component';

describe('PresentismoComponent', () => {
  let component: PresentismoComponent;
  let fixture: ComponentFixture<PresentismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
