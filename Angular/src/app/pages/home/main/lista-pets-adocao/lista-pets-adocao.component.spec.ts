import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPetsAdocaoComponent } from './lista-pets-adocao.component';

describe('ListaPetsAdocaoComponent', () => {
  let component: ListaPetsAdocaoComponent;
  let fixture: ComponentFixture<ListaPetsAdocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPetsAdocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPetsAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
