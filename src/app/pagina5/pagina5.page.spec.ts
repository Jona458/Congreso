import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagina5Page } from './pagina5.page';

describe('Pagina5Page', () => {
  let component: Pagina5Page;
  let fixture: ComponentFixture<Pagina5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pagina5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
