import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerPuntosComponent } from './modal-ver-puntos.component';

describe('ModalVerPuntosComponent', () => {
  let component: ModalVerPuntosComponent;
  let fixture: ComponentFixture<ModalVerPuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVerPuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
