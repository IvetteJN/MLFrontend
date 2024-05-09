import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraseleccionComponent } from './nuestraseleccion.component';

describe('NuestraseleccionComponent', () => {
  let component: NuestraseleccionComponent;
  let fixture: ComponentFixture<NuestraseleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestraseleccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestraseleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
