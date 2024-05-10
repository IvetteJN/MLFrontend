import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel.component';

describe('NuestraseleccionCarruselComponent', () => {
  let component: NuestraseleccionCarruselComponent;
  let fixture: ComponentFixture<NuestraseleccionCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestraseleccionCarruselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestraseleccionCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
