import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudUsuaPage } from './crud-usua.page';

describe('CrudUsuaPage', () => {
  let component: CrudUsuaPage;
  let fixture: ComponentFixture<CrudUsuaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudUsuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
