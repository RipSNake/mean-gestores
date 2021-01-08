import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorCardComponent } from './gestor-card.component';

describe('GestorCardComponent', () => {
  let component: GestorCardComponent;
  let fixture: ComponentFixture<GestorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
