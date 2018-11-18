import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPetsComponent } from './busca-pets.component';

describe('BuscaPetsComponent', () => {
  let component: BuscaPetsComponent;
  let fixture: ComponentFixture<BuscaPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
