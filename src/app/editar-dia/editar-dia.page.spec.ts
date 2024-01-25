import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDiaPage } from './editar-dia.page';

describe('EditarDiaPage', () => {
  let component: EditarDiaPage;
  let fixture: ComponentFixture<EditarDiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
