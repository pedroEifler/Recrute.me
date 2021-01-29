import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCandidatoComponent } from './formulario-candidato.component';

describe('FormularioCandidatoComponent', () => {
  let component: FormularioCandidatoComponent;
  let fixture: ComponentFixture<FormularioCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
