import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaCandidatoComponent } from './tabela-candidato.component';
import {  } from '@fortawesome/free-solid-svg-icons';

describe('TabelaCandidatoComponent', () => {
  let component: TabelaCandidatoComponent;
  let fixture: ComponentFixture<TabelaCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
