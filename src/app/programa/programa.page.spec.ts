import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramaPage } from './programa.page';

describe('ProgramaPage', () => {
  let component: ProgramaPage;
  let fixture: ComponentFixture<ProgramaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProgramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
