import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicaoClimaticaComponent } from './condicao-climatica.component';

describe('CondicaoClimaticaComponent', () => {
  let component: CondicaoClimaticaComponent;
  let fixture: ComponentFixture<CondicaoClimaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicaoClimaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicaoClimaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
