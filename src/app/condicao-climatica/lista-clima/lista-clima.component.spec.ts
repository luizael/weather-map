import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClimaComponent } from './lista-clima.component';

describe('ListaClimaComponent', () => {
  let component: ListaClimaComponent;
  let fixture: ComponentFixture<ListaClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
