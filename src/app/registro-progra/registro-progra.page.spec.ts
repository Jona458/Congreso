import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPrograPage } from './registro-progra.page';

describe('RegistroPrograPage', () => {
  let component: RegistroPrograPage;
  let fixture: ComponentFixture<RegistroPrograPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroPrograPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
