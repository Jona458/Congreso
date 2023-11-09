import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormunoPage } from './formuno.page';

describe('FormunoPage', () => {
  let component: FormunoPage;
  let fixture: ComponentFixture<FormunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
