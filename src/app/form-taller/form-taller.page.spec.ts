import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTallerPage } from './form-taller.page';

describe('FormTallerPage', () => {
  let component: FormTallerPage;
  let fixture: ComponentFixture<FormTallerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormTallerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
